let responseMessage = require('../modules/responseMessage');
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
let user = require('../models/user');

exports.getUserName = async (req,res)=>{
    try{
        const userName = await user.getUserName();

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK, userName[0]));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
        throw err;
    }
}