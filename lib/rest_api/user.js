exports.on = function(app) {
    const preRestApi = '/user';
    const user = require('../role/user');
    const utilsValue = require('../utils/value');
    app.get(preRestApi + '/getPersonalInfo', function(req, res) {
        /* #swagger.security = [{
               "apiKeyAuth": []
        }] */

        const response = {
            'status':true,
            'data':''
        }
        const token = req.headers['x-token']
        if(utilsValue.isValid(token)){
            const decodeToken = utilsValue.jwtDecode(token)
            const id = decodeToken.id
            if(utilsValue.isValid(id)){
                user.getPersonalInfo(id,(result,data)=>{
                    response.status = result;
                    response.data = data
                    res.send(response);
                })
            }else{
                response.status = false
                response.data = "x-token format error"
                res.send(response);
            }
        }else{
            response.status = false
            response.data = "x-token undefined"
            res.send(response);
        }
    });

    app.get(preRestApi + '/getUserList', function(req, res) {
        const response = {
            'status':true,
            'data':''
        }
        res.send(response);
    });

    app.put(preRestApi + '/editUser', function(req, res) {
        const response = {
            'status':true,
            'data':''
        }
        res.send(response);
    });

    app.delete(preRestApi + '/removeUser', function(req, res) {
        const response = {
            'status':true,
            'data':''
        }
        res.send(response);
    });
}