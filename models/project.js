const pool = require('../modules/pool');
const table = 'project';

exports.getlist = async(req,res,next)=> {
        const query = `SELECT p_idx, p_poster_img, p_name, p_genre, 
                     p_date, p_total_money, p_rate, p_times, p_goal_money FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('ERROR : ', err);
            throw err;
        }
}


