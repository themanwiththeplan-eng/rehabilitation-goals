// are we deleting this?
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://laurenshallop:password@cluster0.tpz22.mongodb.net/rehabgoals?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
});

module.exports = mongoose.connection;