const PieModel = require('./pie');
const UserModel = require('./user');
module.exports = {
    PieModel,
    UserModel
}

/* Another Way To Do It: 
module.exports = {
    pieController: require('./pieController'),
    userController: require('./userController')
}
*/