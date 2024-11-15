const express = require('express')
const Workout = require('../models/workout-model')
const router = express.Router()
const {
    getWorkouts,
    singleWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workout-controller')


//GET All Workouts
router.get('/', getWorkouts)

//Get a single 
router.get('/:id', singleWorkout)

//Post a new Workout
router.post('/', createWorkout)

//Deleet a Workout
router.delete('/:id', deleteWorkout)

//Update a Workout
router.patch('/:id', updateWorkout)

module.exports= router