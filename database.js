const mysql = require('mysql');


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'movie-search'
  });
  
function query(sql, params) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
}

module.exports = { query };
