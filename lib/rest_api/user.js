exports.on = function(app) {
    const preRestApi = '/user';
    const user = require('../role/user');
    const middleware = require('./middleware').middleware;
    const utilsValue = require('../utils/value');
    console.log(middleware)
    app.get(preRestApi + '/getPersonalInfo',[middleware.tokenAuth], function(req, res) {
        /* #swagger.security = [{
               "apiKeyAuth": []
        }] */

        const response = {
            'status':true,
            'data':''
        }
        const token = req.headers['x-token']
        const decodeToken = utilsValue.jwtDecode(token)
        const id = decodeToken.id
        user.getPersonalInfo(id,(result,data)=>{
            response.status = result;
            response.data = data
            res.send(response);
        })
    });

    app.get(preRestApi + '/getUserList',[middleware.tokenAuth], function(req, res) {
        /* #swagger.security = [{
               "apiKeyAuth": []
        }] */
        const response = {
            'status':true,
            'data':''
        }
        res.send(response);
    });

    app.put(preRestApi + '/editUser',[middleware.tokenAuth], function(req, res) {
        /* #swagger.security = [{
               "apiKeyAuth": []
        }] */
        const response = {
            'status':true,
            'data':''
        }
        res.send(response);
    });

    app.delete(preRestApi + '/removeUser',[middleware.tokenAuth,middleware.checkIsAdmin], function(req, res) {
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