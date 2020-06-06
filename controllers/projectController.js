let responseMessage = require('../modules/responseMessage');
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
let project = require('../models/project');
let moment = require('moment');

exports.getlist = async (req,res)=>{
    try{
        const result = await project.getlist();

        // 현재 시간 계산
        const now = moment().format("YYYY-MN-DD");
        var arrDate2 = now.split("-");
        var getDate2 = new Date(parseInt(arrDate2[0]),parseInt(arrDate2[1])-1,parseInt(arrDate2[2]));

        result.forEach((element, index) => {
            // 남은 날짜 계산하기
            var arr = element.p_date;
            var arrDate1 = arr.split("-");
            var getDate1 = new Date(parseInt(arrDate1[0]),parseInt(arrDate1[1])-1,parseInt(arrDate1[2]));
            element.p_date = (getDate1.getTime() - getDate2.getTime()) / (1000 * 60 * 60 * 24);

            // 펀딩 퍼센테이지 계산하기 - 소수점 반올림
            var p_percentage = Math.round(element.p_goal_money / element.p_total_money * 100);
            element.p_percentage = p_percentage;
            delete element['p_goal_money'];
        });

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK, result));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
        throw err;
    }
}

exports.getDeadline = async (req,res)=>{
    try{
        const result = await project.getDeadline();
        const data = [result[0], result[1], result[2]];

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK, data));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
        throw err;
    }
}

exports.getDetail = async (req,res)=>{
    try{
        const p_idx = req.params.p_idx;
        const result = await project.getDetail(p_idx);
        // 남은 날짜 계산
        const now = moment().format("YYYY-MN-DD");
        var arr = result[0].p_date;
        var arrDate1 = arr.split("-");
        var getDate1 = new Date(parseInt(arrDate1[0]),parseInt(arrDate1[1])-1,parseInt(arrDate1[2]));
        var arrDate2 = now.split("-");
        var getDate2 = new Date(parseInt(arrDate2[0]),parseInt(arrDate2[1])-1,parseInt(arrDate2[2]));
        result[0].p_date = (getDate1.getTime() - getDate2.getTime()) / (1000 * 60 * 60 * 24);

        // 성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK, result));
    } catch(err){
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR));
        throw err;
    }
}