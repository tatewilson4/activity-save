const express = require('express');
const router = express.Router();
const Activity = require('../models/activities.js');

router.get('/act', async(req, res) => {
    try {
        const router = await Activity.find();
        res.status(200).json(router);
    } catch(error){
        res.status(400).json({
            error: error.message
        });
    }
});

router.get('/act/:id', (req, res, next) => {
    Activity.findById(req.params.id, (err, post) =>
        (err) ? next(err): res.json(post)
    );
});

router.post('/act', async(req, res) => {
    try {
        const newActivity = await Activity.create(req.body);
        res.status(200).json(newActivity);
    } catch(error){
        res.status(400).json({
            error: error.message
        });
    }
});

router.delete('/act/:id', async(req, res) => {
    try {
        const deleteActivity = await Activity.findByIdAndRemove(req.params.id);
        res.status(200).json(deleteActivity);
    } catch(error){
        res.status(400).json({
            error: error.message
        });
    }
});

router.put('/act/:id', async(req, res) => {
    try {
        const updateActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(updateActivity);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
});

module.exports = router;
