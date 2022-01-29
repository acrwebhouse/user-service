exports.on = function(app) {
    const preRestApi = '/user';
    const user = require('../role/user');

    app.get(preRestApi + '/getPersonalInfo', function(req, res) {
        const response = {
            'status':true,
            'data':''
        }
        res.send(response);
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