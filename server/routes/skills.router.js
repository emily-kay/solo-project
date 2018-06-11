const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "skills";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error in router get ', error);
            res.sendStatus(500);
        });
});

router.post('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.body)
        const queryText = `INSERT INTO "user_skills" ("person_id", "skills_id", "count")
                            VALUES ($1, $2, $3)`;
        pool.query(queryText, [req.user.id, req.body.id, req.body.count])
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