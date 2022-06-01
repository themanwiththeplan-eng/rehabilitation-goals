const mongoose = require('mongoose')
mongoose.connect(
  `mongodb+srv://laurenshallop:TpU7nsgF486b3do8@cluster0.tpz22.mongodb.net/rehabgoals?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
module.exports = mongoose.connection
