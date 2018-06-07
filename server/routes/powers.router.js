const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req,res)=>{
    pool.query(`SELECT * FROM "powers";`)
        .then((results)=>{
            res.send(results.rows);
        })
        .catch((error)=>{
            console.log('Error in router get ', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {

});

module.exports = router;