const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
} = require('../..controllers/thought-con')