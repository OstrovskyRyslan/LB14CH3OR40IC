const Pool=require('pg').Pool;
const pool= new Pool ({
    user:'postgres',
    password:'astra257GGR',
    host:'localhost',
    port:5432,
    database:'bd_postgres'
})

module.exports=pool;