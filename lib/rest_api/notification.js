exports.on = function(app) {
    const preRestApi = '/notification';
    const notification = require('../role/notification');
    const middleware = require('./middleware').middleware;
    const utilsValue = require('../utils/value');
    
    app.post(preRestApi + '/addNotification', function(req, res) {
        /*#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add a notification',
            schema: {
                token: 'cxvhaghhrcI:APA91bG15DNhDn25k5m7vfyo3QFb1eVsn6oCskWPcW',
                userId: '61ed2777f5178ce385654350',
                type: 1
            }
        }*/ 
        const token = req.body.token
        const userId = req.body.userId
        const type = req.body.type
        const response = {
            'status':true,
            'data':''
        }
        notification.addNotification(token,userId,type,(result,data)=> {
            response.status = result;
            response.data = data
            res.send(response);
        })
    });

    app.put(preRestApi + '/editNotification',[middleware.tokenAuth , middleware.checkCanEdit], function(req, res) {
        /* #swagger.security = [{
               "apiKeyAuth": []
        }] 
        #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Edit a user',
            schema: {
                id: '61ed2777f5178ce385654350',
                token: 'cxvhaghhrcI:APA91bG15DNhDn25k5m7vfyo3QFb1eVsn6oCskWPcW',
                userId: '61ed2777f5178ce385654350',
                type: 1
            }
        }
        */

        const id = req.body.id
        const token = req.body.token
        const userId = req.body.userId
        const type = req.body.type
        const response = {
            'status':true,
            'data':''
        }
        res.send(response);
    });

}