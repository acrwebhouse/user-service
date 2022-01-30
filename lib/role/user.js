const config = require('../setting/config').config;
const utilsValue = require('../utils/value');
const httpRequest = require('../utils/httpRequest');

function getPersonalInfo(id,callback) {
    if (utilsValue.isValid(id)){
        const url = config['user-basic-server'].location+'/'+config['user-basic-server'].restApi.getUser + '?id='+id+'&&isDelete=false';
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

function editUser(id,account,password,name,gender,roles,rolesInfo,houseIds,phone,mail,address,callback) {
    const user = {}
    if (utilsValue.isValid(id)){
        user.id = id
    }
    if (utilsValue.isValid(account)){
        user.account = account
    }
    if (utilsValue.isValid(password)){
        user.password = password
    }
    if (utilsValue.isValid(name)){
        user.name = name
    }
    if (utilsValue.isValid(gender)){
        user.gender = gender
    }
    if (utilsValue.isValid(roles)){
        user.roles = roles
    }
    if (utilsValue.isValid(rolesInfo)){
        user.rolesInfo = rolesInfo
    }
    if (utilsValue.isValid(houseIds)){
        user.houseIds = houseIds
    }
    if (utilsValue.isValid(phone)){
        user.phone = phone
    }
    if (utilsValue.isValid(mail)){
        user.mail = mail
    }
    if (utilsValue.isValid(address)){
        user.address = address
    }

    const url = config['user-basic-server'].location+'/'+config['user-basic-server'].restApi.editUser;
    const method = 'PUT';
    const headers = {};

    httpRequest.sendJsonRequest(url, headers, user, method, (error, body) => {
        if (error) {
            callback(false,body);
        } else {
            if(body.data.nModified > 0){
                callback(true,'edit success');
            }else{
                callback(false,'no match id');
            }
        }
    });
}


exports.getPersonalInfo = getPersonalInfo
exports.removeUser = removeUser
exports.editUser = editUser