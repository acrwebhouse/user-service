const config = require('../setting/config').config;
const utilsValue = require('../utils/value');
const httpRequest = require('../utils/httpRequest');

function getPersonalInfo(id,callback) {
    if (utilsValue.isValid(id)){
        const url = config['user-basic-server'].location+'/'+config['user-basic-server'].restApi.getUser + '?id='+id;
        const method = 'GET';
        const headers = {};
        httpRequest.sendGetRequest(url, headers, method, (error, body) => {
            if (error) {
              callback(false,body);
            } else {
                try{
                    const res = JSON.parse(body)
                    callback(true,res.data);
                }catch(e){
                    callback(false,"data format error: "+body);
                }
            }
          });
    }else {
        callback(false, 'id invalid')
    }
}

function removeUser(ids,callback) {
    if (utilsValue.isValid(ids)){
        const url = config['user-basic-server'].location+'/'+config['user-basic-server'].restApi.removeUser;
        const method = 'DELETE';
        const headers = {};
        const json = {
            ids:ids
        }
        httpRequest.sendJsonRequest(url, headers, json, method, (error, body) => {
            if (error) {
              callback(false,body);
            } else {
              if(body.data.nModified > 0){
                callback(true,'remove '+body.data.nModified+' account');
              }else{
                callback(false,'no match id');
              }
            }
          });
    }else {
        callback(false, 'id invalid')
    }
}

exports.getPersonalInfo = getPersonalInfo
exports.removeUser = removeUser