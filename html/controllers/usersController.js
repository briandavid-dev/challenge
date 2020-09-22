const { 
    poolUsers
} = require('../database');

module.exports.getUsers = async (req, res) => {
    try {

        // get params
        const { id } = req.params;

        // get connection
        const conn = await poolUsers.getConnection();

        // create a new query
        const query = `SELECT * FROM users WHERE id = ${id}`;

        // executing the query
        const rows = await conn.query(query);

        // response
        res.status(200).json(rows);
        
    } 
    catch (error) 
    {
        res.json({
            'msg': `Error: ${error.message}`
        });
    }
}