const router = require('express').Router();

const { model } = require('mongoose');
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    // need a bonus delete
} = require('../..controllers/thought-con')



// this creates the routes
// the paths are in the " "
router.route("/api/thoughts").get(getAllThought).post(createThought);
// specific ID
router.route("/api/thoughts/:id").get(getThoughtById).put(updateThought);

router.route






module.exports = router;