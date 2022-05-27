// are we deleting this?
const mongoose = require('mongoose')

const goalSchema = mongoose.schema(
    {
        text: {
            type: String,
            required: true,
        },
    }, 
    {
        timestamps: true,
    });

module.exports = mongoose.model('Goal', goalSchema);    