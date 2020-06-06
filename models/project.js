const pool = require('../modules/pool');
const table = 'project';

const project = {
    getlist: async () => {
        const query = `SELECT p_idx, p_poster_img, p_name, p_genre, 
                     p_date, p_total_money, p_rate, p_times, p_goal_money FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('ERROR : ', err);
            throw err;
        }
    },

    getDeadline: async () => {
        const query = `SELECT p_poster_img FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('ERROR : ', err);
            throw err;
        }
    },

    getDetail: async (p_idx) => {
        const query = `SELECT p_poster_img, p_genre, p_name, p_funding_money,
                    p_total_money, p_date, p_sponsors, p_funding_des, p_information,
                    p_story, p_group_img FROM ${table} WHERE p_idx = ${p_idx}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            console.log('ERROR : ', err);
            throw err;
        }
    }
}

module.exports = project;
