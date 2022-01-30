const utilsValue = require('../utils/value');
const middleware = {
    tokenAuth: function(req, res, next) {
        const token = req.headers['x-token']
        if(utilsValue.isValid(token)){
            const decodeToken = utilsValue.jwtDecode(token)
            const id = decodeToken.id
            if(utilsValue.isValid(id)){
                next()
            }else{
                const response = {
                    status : false,
                    data :"x-token format error"
                }
                res.send(response);
            }
        }else{
            const response = {
                status : false,
                data :"x-token undefined"
            }
            res.send(response);
        }
    },
    checkIsAdmin: function(req, res, next) {
       const token = req.headers['x-token']
       const decodeToken = utilsValue.jwtDecode(token)
       const roles = decodeToken.roles
       if(roles.indexOf(1)>=0){
          next()
       }else{
        const response = {
            status : false,
            data :"role is not admin"
        }
        res.send(response);
       }
    }
}

exports.middleware = middleware