let responseMessage = require('../modules/responseMessage');
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
let user_pl = require('../models/user_pl');

exports.getlist = async (req,res)=>{
    try{
        const result = await user_pl.getlist();

        // 펀딩 퍼센테이지 계산하기 - 소수점 반올림
        const p_percentage = Math.round(result[0].p_goal_money / result[0].p_total_money * 100);

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.READ_MAIN_LIST_SUCCESS, result));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
}