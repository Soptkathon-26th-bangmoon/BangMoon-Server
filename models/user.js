const pool = require('../modules/pool');
const table = 'user';

exports.getUserName = async(req,res,next)=> {
        const query = `SELECT user_name FROM ${table} WHERE user_idx = "1"`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('ERROR : ', err);
            throw err;
        }
}

exports.getUserList = async(req,res,next)=> {
    const query = `SELECT p_idx, p_poster_img, p_name, p_genre, p_date, p_total_money, p_rate, p_times, p_goal_money
                   FROM BangMoon.project JOIN BangMoon.funding Using(p_idx) 
                   WHERE user_idx = "1" and p_complete = "0";`;
    try {
        const result = await pool.queryParam(query);
        return result;
    } catch (err) {
        console.log('ERROR : ', err);
        throw err;
    }
}

exports.getCompleteProject = async(req,res,next)=> {
    const query = `SELECT p_completed_img, p_name, p_genre, p_rate, p_times FROM BangMoon.project JOIN BangMoon.funding Using(p_idx) 
                   WHERE user_idx = "1" and p_complete = "1";`;
    try {
        const result = await pool.queryParam(query);
        return result;
    } catch (err) {
        console.log('ERROR : ', err);
        throw err;
    }
}