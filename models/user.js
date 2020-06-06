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
