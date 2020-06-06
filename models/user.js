const pool = require('../modules/pool');
const table = 'user';

exports.getlist = async(req,res,next)=> {
        const query = `SELECT user_name FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('ERROR : ', err);
            throw err;
        }
}
