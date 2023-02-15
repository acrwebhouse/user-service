exports.on = function(app) {
    const preRestApi = '/transaction';
    const user = require('../role/user');
    const transaction = require('../role/transaction');
    const middleware = require('./middleware').middleware;
    const utilsValue = require('../utils/value');

    app.get(preRestApi + '/getTransactionList',[middleware.tokenAuth , middleware.checkIsTransactionOwner, middleware.checkIsEmployee], function(req, res) {
        /* #swagger.security = [{
               "apiKeyAuth": []
        }] 
        #swagger.parameters['userId'] = {
            in: 'query',
            type: 'string',
            schema: '61ed2777f5178ce385654350'
        }
        #swagger.parameters['companyId'] = {
            in: 'query',
            type: 'string',
            schema: '61ed2777f5178ce385654350'
        }
        #swagger.parameters['isDelete'] = {
            in: 'query',
            type: 'boolean',
        }
        #swagger.parameters['minPrice'] = {
            in: 'query',
            type: 'int',
            schema: 0
        }#swagger.parameters['maxPrice'] = {
            in: 'query',
            type: 'int',
            schema: 19999
        }
        #swagger.parameters['startTransactionDate'] = {
            in: 'query',
            type: 'string',
            schema: '2022/03/11'
        }
        #swagger.parameters['endTransactionDate'] = {
            in: 'query',
            type: 'string',
            schema: '2022/10/11'
        }
        #swagger.parameters['city'] = {
            in: 'query',
            type: 'string',
            schema: '台北市'
        }
        #swagger.parameters['area'] = {
            in: 'query',
            type: 'string',
            schema: '文山區'
        }
        #swagger.parameters['minServiceCharge'] = {
            in: 'query',
            type: 'int',
            schema: 0
        }#swagger.parameters['maxServiceCharge'] = {
            in: 'query',
            type: 'int',
            schema: 19999
        }
        #swagger.parameters['minActualPrice'] = {
            in: 'query',
            type: 'int',
            schema: 0
        }#swagger.parameters['maxActualPrice'] = {
            in: 'query',
            type: 'int',
            schema: 19999
        }
        #swagger.parameters['typeOfRental'] = {
            in: 'query',
            type: 'int',
            schema: 1
        }
        */

        const isDelete = req.query.isDelete
        const skip = req.query.skip
        const limit = req.query.limit
        const minPrice = req.query.minPrice
        const maxPrice = req.query.maxPrice
        const startTransactionDate = req.query.startTransactionDate
        const endTransactionDate = req.query.endTransactionDate
        const area = req.query.area
        const city = req.query.city
        const typeOfRental = req.query.typeOfRental
        const userId = req.query.userId
        const companyId = req.query.companyId
        const minServiceCharge = req.query.minServiceCharge
        const maxServiceCharge = req.query.maxServiceCharge
        const minActualPrice = req.query.minActualPrice
        const maxActualPrice = req.query.maxActualPrice

        const response = {
            'status':true,
            'data':''
        }
        transaction.getTransactionList(userId,companyId,minPrice,maxPrice,startTransactionDate,endTransactionDate,city,area,minServiceCharge,maxServiceCharge,minActualPrice,maxActualPrice,typeOfRental,isDelete,skip,limit,(result,data)=>{
            response.status = result;
            response.data = data
            res.send(response);
        })
    });

    app.put(preRestApi + '/editTransactionNoIncludeCompany',[middleware.tokenAuth , middleware.checkIsTransactionOwner, middleware.checkIsEmployee], function(req, res) {
        /* #swagger.security = [{
               "apiKeyAuth": []
        }] 
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Edit a transaction',
            schema: {
                id: '61ed2777f5178ce385654350',
                houseId: '636fce410653bf00212481a5',
                userId: '636fcdc30653bf00212481a3',
                actualPrice: 12000,
                serviceCharge: 10000,
                transactionDate : '2022/05/11',
                startRentDate : '2022/05/11',
                endRentDate : '2022/10/11',
                companyId: '636fcdc30653bf00212481a3'
            }
        }
        */

        const id = req.body.id
        const houseId = req.body.houseId
        const userId = req.body.userId
        const actualPrice = req.body.actualPrice
        const serviceCharge = req.body.serviceCharge
        const transactionDate = req.body.transactionDate
        const startRentDate = req.body.startRentDate
        const endRentDate = req.body.endRentDate
        const response = {
            'status':true,
            'data':''
        }
        transaction.editTransactionNoIncludeCompany(id,houseId,userId,actualPrice,serviceCharge,transactionDate,startRentDate,endRentDate,(result,data)=> {
            response.status = result;
            response.data = data
            res.send(response);
        })
    });

    app.delete(preRestApi + '/removeTransaction',[middleware.tokenAuth,middleware.checkIsTransactionAdmin], function(req, res) {
         /*
         #swagger.security = [{
               "apiKeyAuth": []
        }]
         #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Remove a tansaction',
            schema: {
                ids: ['61ed2777f5178ce385654350','61ed2777f5178ce385654353']
            }
        }*/

        const ids = req.body.ids
        const response = {
            'status':true,
            'data':''
        }
        transaction.removeTransaction(ids,(result,data)=>{
            response.status = result;
            response.data = data
            res.send(response);
        })
    });
}