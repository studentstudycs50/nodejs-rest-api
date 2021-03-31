const app = require('../app')

const PORT = process.env.PORT || 3000

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST } = process.env;

mongoose.Promise = global.Promise;

const connect = mongoose.connect(DB_HOST, {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

connect
  .then(() => {
    app.listen(PORT, function (){
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  })
  .catch(error => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  })

