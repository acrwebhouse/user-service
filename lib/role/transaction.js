const config = require('../setting/config').config;
const httpRequest = require('../utils/httpRequest');
const utilsValue = require('../utils/value');

function getTransactionList(userId,companyId,minPrice,maxPrice,startTransactionDate,endTransactionDate,area,typeOfRental,isDelete,skip,limit,callback) {
    let url = config['transaction-basic-server'].location+'/'+config['transaction-basic-server'].restApi.getTransactionList
    let preStr = '?'
    if(utilsValue.isValid(userId)){
        url = url + preStr + 'userId=' + userId
        preStr = '&&'
    }
    if(utilsValue.isValid(companyId)){
        url = url + preStr + 'companyId=' + companyId
        preStr = '&&'
    }
    if(utilsValue.isValid(minPrice)){
        url = url + preStr + 'minPrice=' + minPrice
        preStr = '&&'
    }
    if(utilsValue.isValid(maxPrice)){
        url = url + preStr + 'maxPrice=' + maxPrice
        preStr = '&&'
    }
    if(utilsValue.isValid(startTransactionDate)){
        url = url + preStr + 'startTransactionDate=' + startTransactionDate
        preStr = '&&'
    }
    if(utilsValue.isValid(endTransactionDate)){
        url = url + preStr + 'endTransactionDate=' + endTransactionDate
        preStr = '&&'
    }
    if(utilsValue.isValid(area)){
        url = url + preStr + 'area=' + area
        preStr = '&&'
    }
    if(utilsValue.isValid(typeOfRental)){
        url = url + preStr + 'typeOfRental=' + typeOfRental
        preStr = '&&'
    }
    if(utilsValue.isValid(isDelete)){
        url = url + preStr + 'isDelete=' + isDelete
        preStr = '&&'
    }
    if(utilsValue.isValid(skip)){
        url = url + preStr + 'skip=' + skip
        preStr = '&&'
    }
    if(utilsValue.isValid(limit)){
        url = url + preStr + 'limit=' + limit
        preStr = '&&'
    }
    
    const method = 'GET';
    const headers = {};
    httpRequest.sendGetRequest(url, headers, method, (error, body) => {
        if (error) {
            console.log('===getTransactionList==url=')
            console.log(url)
            console.log('===getTransactionList==error=')
            console.log(error)
            console.log('===getTransactionList==body=')
            console.log(body)
            callback(false,body);
        } else {
            try{
                const res = JSON.parse(body)
                callback(true,res.data);
            }catch(e){
                console.log(e)
                callback(false,"data format error: "+e);
            }
        }
    });
}


exports.getTransactionList = getTransactionList
