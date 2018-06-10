const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "traits";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error on traits server GET', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log(req.body)
    const traitsAdded = req.body;
    const queryText = `INSERT INTO "user_traits" ("person_id", "traits_id")
                        VALUES ($1, $2)`;
    const queryValues = [
        req.user.id,
        traitsAdded.id,
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error on traits server POST', err);
            res.sendStatus(500);
        });
});

module.exports = router;