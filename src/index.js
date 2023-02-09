const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('filtered content');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});


// starting the server
const PORT=3001
const userRoute=require('./routes/user')
const contactRoute=require('./routes/contact')
app.use("/user",userRoute)
app.use("/contact",contactRoute)
app.listen(PORT,()=>{
    console.log("Server is running")
})