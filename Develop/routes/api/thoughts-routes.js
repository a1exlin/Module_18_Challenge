const router = require('express').Router();

const {
    getAllThought,
    getThoughtByID,
    createThought,
    updateThought,
    // need a bonus delete
} = require('../../controllers/thought-con')



// this creates the routes
// the paths are in the " "
router.route("/api/thoughts").get(getAllThought).post(createThought);
// specific ID
router.route("/api/thoughts/:id").get(getThoughtByID).put(updateThought);







module.exports = router;