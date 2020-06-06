let responseMessage = require('../modules/responseMessage');
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
let project = require('../models/project');
let moment = require('moment');

exports.getlist = async (req,res)=>{
    try{
        const result = await project.getlist();
        // 남은 날짜 계산하기
        const now = moment().format("YYYY-MN-DD");

        var arr = result[0].p_date;

        var arrDate1 = arr.split("-");
        var getDate1 = new Date(parseInt(arrDate1[0]),parseInt(arrDate1[1])-1,parseInt(arrDate1[2]));
        var arrDate2 = now.split("-");
        var getDate2 = new Date(parseInt(arrDate2[0]),parseInt(arrDate2[1])-1,parseInt(arrDate2[2]));
        var getDiffTime = (getDate1.getTime() - getDate2.getTime()) / (1000 * 60 * 60 * 24);


        // 펀딩 퍼센테이지 계산하기 - 소수점 반올림
        const p_percentage = Math.round(result[0].p_goal_money / result[0].p_total_money * 100);

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.READ_MAIN_LIST_SUCCESS, result));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
}