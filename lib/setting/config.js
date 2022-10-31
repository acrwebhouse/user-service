require('dotenv').config()
exports.config = {
    'serverIp':process.env.SERVER_IP || '127.0.0.1',
    'serverPort': process.env.SERVER_PORT || 4000,
    'user-basic-server':{
        location: process.env.USER_BASIC_LOCATION ||'http://127.0.0.1:13000',
        restApi:{
            'getUser':'user/getUser',
            'editUser':'user/editUser',
            'getUsers':'user/getUsers',
            'removeUser':'user/removeUser'
        }
    },
    'notification-basic-server':{
        location: process.env.NOTIFICATION_BASIC_LOCATION ||'http://127.0.0.1:17000',
        restApi:{
            'addNotification':'notification/addNotification',
            'editNotification':'notification/editNotification'
        }
    },
    'employees-basic-server':{
        location: process.env.EMPLOYEES_BASIC_LOCATION ||'http://35.234.42.100:21000',
        restApi:{
            'getEmployeesByUserId':'employees/getEmployeesByUserId'
        }
    },
    'swaggerIp':process.env.SWAGGER_IP || '127.0.0.1',
}