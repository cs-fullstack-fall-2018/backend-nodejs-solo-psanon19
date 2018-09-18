
const configValues = require('./config');

module.exports = {

    mongoUrl: function () {

        return 'mongodb://' + configValues.uname + ':' +
            configValues.pwd + '@ds161062.mlab.com:61062/solo-backend-classwork';
    },


};
