const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "traits";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error in router get ', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `INSERT INTO "user_traits" ("person_id", "traits")
                            VALUES ($1, $2)`;
        pool.query(queryText, [req.user.id, req.body.trait])
            .then(res.sendStatus(201))
            .catch((err) => {
                console.log('Error on traits server POST', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.delete('/', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `DELETE FROM "user_traits"
                            WHERE "person_id" = ($1)
                            AND traits = ($2);`;
        pool.query(queryText, [req.user.id, req.body.trait])
            .then(res.sendStatus(201))
            .catch((err) => {
                console.log('Error on traits server POST', err);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;