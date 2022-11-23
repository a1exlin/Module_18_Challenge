// index.js file added to routes folder and UPDATED
const router = require('express').Router();

const apiRoutes = require('./api/thoughts-routes');
// const userRoutes = require('./api/user-routes');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);
// router.use('/api', userRoutes);


router.use((req, res) => {
  res.status(404).send('<h1> 404 Error!</h1>');
});

module.exports = router;