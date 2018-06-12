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
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "user_powers" ("person_id", "powers")
                            VALUES ($1, $2)`;
        pool.query(queryText, [req.user.id, req.body.power])
            .then(res.sendStatus(201))
            .catch((err) => {
                console.log('Error on powers server POST', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.delete('/', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `DELETE FROM "user_powers"
                            WHERE "person_id" = ($1)
                            AND powers = ($2);`;
        pool.query(queryText, [req.user.id, req.body.power])
            .then(res.sendStatus(201))
            .catch((err) => {
                console.log('Error on powers server POST', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;