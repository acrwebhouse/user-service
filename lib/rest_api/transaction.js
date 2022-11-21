exports.on = function(app) {
    const preRestApi = '/transaction';
    const user = require('../role/user');
    const transaction = require('../role/transaction');
    const middleware = require('./middleware').middleware;
    const utilsValue = require('../utils/value');

    app.get(preRestApi + '/getTransactionList',[middleware.tokenAuth , middleware.checkIsEmployee], function(req, res) {
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
        #swagger.parameters['area'] = {
            in: 'query',
            type: 'string',
            schema: '文山區'
        }
        #swagger.parameters['typeOfRental'] = {
            in: 'query',
            type: 'int',
            schema: 1
        }
        */

        console.log('=======getTransactionList======')

        const isDelete = req.query.isDelete
        const skip = req.query.skip
        const limit = req.query.limit
        const minPrice = req.query.minPrice
        const maxPrice = req.query.maxPrice
        const startTransactionDate = req.query.startTransactionDate
        const endTransactionDate = req.query.endTransactionDate
        const area = req.query.area
        const typeOfRental = req.query.typeOfRental
        const userId = req.query.userId
        const companyId = req.query.companyId
        const response = {
            'status':true,
            'data':''
        }
        transaction.getTransactionList(userId,companyId,minPrice,maxPrice,startTransactionDate,endTransactionDate,area,typeOfRental,isDelete,skip,limit,(result,data)=>{
            response.status = result;
            response.data = data
            res.send(response);
        })
        // res.send(response)
        // user.getUsers(start,count,timeSort,roles,name,salesCity,salesArea,(result,data)=>{
            // response.status = result;
            // response.data = data
            // res.send(response);
        // })
    });

    app.put(preRestApi + '/editTransaction',[middleware.tokenAuth , middleware.checkCanEdit], function(req, res) {
        /* #swagger.security = [{
               "apiKeyAuth": []
        }] 
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Edit a user',
            schema: {
                id: '61ed2777f5178ce385654350',
                account: 'a123456789',
                password: '123456',
                name: 'Chris',
                gender: true,
                roles: [1,2,3,4],
                rolesInfo: {
                    admin:{},
                    host:{},
                    user:{},
                    sales:{},
                },
                houseIds:[],
                phone: '0909666666',
                companyId: '61ed2777f5178ce385654350',
                mail: 'acr.webhouse@gmail.com',
                lineId:'s_213456789',
                address: '台北市文山區興隆路六段66號6樓',
                bornDate: '2022/05/11'
            }
        }
        */

        const response = {
            'status':true,
            'data':''
        }

        const id = req.body.id
        const account = req.body.account
        const password = req.body.password
        const name = req.body.name
        const gender = req.body.gender
        const roles = req.body.roles
        const rolesInfo = req.body.rolesInfo
        const houseIds = req.body.houseIds
        const phone = req.body.phone
        const companyId = req.body.companyId
        const mail = req.body.mail
        const lineId = req.body.lineId
        const address = req.body.address
        const bornDate = req.body.bornDate

        user.editUser(id,account,password,name,gender,roles,rolesInfo,houseIds,phone,mail,lineId,address,bornDate,companyId,(result,data)=>{
            response.status = result;
            response.data = data
            res.send(response);
        })
    });

    app.delete(preRestApi + '/removeTransaction',[middleware.tokenAuth,middleware.checkIsAdmin], function(req, res) {
         /*
         #swagger.security = [{
               "apiKeyAuth": []
        }]
         #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Remove a user',
            schema: {
                ids: ['61ed2777f5178ce385654350','61ed2777f5178ce385654353']
            }
        }*/

        const ids = req.body.ids
        const response = {
            'status':true,
            'data':''
        }
        user.removeUser(ids,(result,data)=>{
            response.status = result;
            response.data = data
            res.send(response);
        })
    });
}