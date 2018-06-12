const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('HEREHEREHEREHERE', req.body)
        const completedBase = req.body;
        const queryText = `INSERT INTO "base" (
            "person_id", 
            "first_name", 
            "last_name",  
            "super_name",
            "home_town",
            "values",
            "goals",
            "backstory",
            "weapons",
            "vehicles",
            "lairs",
            "teammates",
            "loves",
            "enemies")
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`;

        pool.query(queryText,   [req.user.id, 
                                completedBase.firstName, 
                                completedBase.lastName, 
                                completedBase.superName, 
                                completedBase.homeTown, 
                                completedBase.values, 
                                completedBase.goals, 
                                completedBase.backstory, 
                                completedBase.weapons, 
                                completedBase.vehicles, 
                                completedBase.lairs, 
                                completedBase.teammates, 
                                completedBase.loves, 
                                completedBase.enemies])
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