const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const WorkoutExerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[a-űA-Ű \-\.]{5,25}$/.test(v);
        //     }
        // }
    },
    workoutType: {
        type: [String],
        required: true,
    },
    workingMuscles: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    sets: {
        type: String,
        required: false,
    },
    reps: {
        type: String,
        required: false,
    },
    time: {
        type: String,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
    },

}, {
    timestamps: true
});

WorkoutExerciseSchema.plugin(idValidator);

module.exports = mongoose.model('Workout-Exercise', WorkoutExerciseSchema);

// _id: string = '';
//   name: string = '';
//   workoutType: string[] = [];
//   workingMuscles: string[] = [];
//   image: string = '';
//   sets: string = '';
//   reps: string = '';
//   time: string = '';
//   weight: number = 0;
  