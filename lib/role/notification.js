const config = require('../setting/config').config;
const utilsValue = require('../utils/value');
const httpRequest = require('../utils/httpRequest');

const notificationDoc = {
    token : '',
    userId : '',
    type : 0
}

function newNotificationDoc(){
    const doc = JSON.parse(JSON.stringify(notificationDoc))
    return doc;
}

function addNotification(token,userId,type,callback) {
    const url = config['notification-basic-server'].location+'/'+config['notification-basic-server'].restApi.addNotification;
    const method = 'POST';
    const headers = {};
    const doc = newNotificationDoc();
    if(utilsValue.isValid(token)){
        doc.token = token
    }

    if(utilsValue.isValid(userId)){
        doc.userId = userId
    }

    if(utilsValue.isValid(type)){
        doc.type = type
    }

    httpRequest.sendJsonRequest(url, headers, doc, method, (error, body) => {
        if (error) {
          callback(false,body);
        } else {
          callback(body.status,body.data);
        }
      });
    
}

exports.addNotification = addNotification
