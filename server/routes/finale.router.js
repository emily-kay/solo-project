const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/about', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT ("first_name", "last_name", "super_name")
                            FROM "base"
                            WHERE "person_id" = $1;`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows);
            })
            .catch((error) => {
                console.log('Error in router get ', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get('/origin', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT ("home_town", "values", "goals", "backstory")
                            FROM "base"
                            WHERE "person_id" = $1;`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows);
            })
            .catch((error) => {
                console.log('Error in router get ', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get('/traits', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT ("traits")
                            FROM "user_traits"
                            WHERE "person_id" = $1;`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows);
            })
            .catch((error) => {
                console.log('Error in router get ', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get('/skills', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT ("skills")
                            FROM "user_skills"
                            WHERE "person_id" = $1;`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows);
            })
            .catch((error) => {
                console.log('Error in router get ', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get('/powers', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT ("powers")
                            FROM "user_powers"
                            WHERE "person_id" = $1;`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows);
            })
            .catch((error) => {
                console.log('Error in router get ', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get('/gadgets', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT ("weapons", "vehicles", "lairs")
                            FROM "base"
                            WHERE "person_id" = $1;`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows);
            })
            .catch((error) => {
                console.log('Error in router get ', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.get('/otherCharacters', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT ("teammates", "loves", "enemies")
                            FROM "base"
                            WHERE "person_id" = $1;`;
        pool.query(queryText, [req.user.id])
            .then((results) => {
                res.send(results.rows);
            })
            .catch((error) => {
                console.log('Error in router get ', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;