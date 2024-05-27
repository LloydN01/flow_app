import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    timeRequired: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Task', taskSchema)
