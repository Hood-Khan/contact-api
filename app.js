// const express = require('express')
// const app = express()
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const userRoute = require('./routes/user')
// const contactRoute = require('./routes/contact')


// mongoose.connect('mongodb+srv://mhk:admin@mhk.utgwdsf.mongodb.net/?appName=MHK')
// .then(res=>{console.log("connected to database")})
// .catch(err=>{console.log(err)})

// app.use(bodyParser.json())

// app.use('/user',userRoute)
// app.use('/contact',contactRoute)


// app.use('*',(req,res)=>{
//     res.status(404).json({
//         msg:'bad request'
//     })
// })

// module.exports = app

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoute = require('./routes/user');
const contactRoute = require('./routes/contact');

// ✅ MUST be BEFORE routes
app.use(express.json());

mongoose.connect(
  'mongodb+srv://mhk:xyz@mhk.utgwdsf.mongodb.net/?appName=MHK'
)
.then(() => {
  console.log("connected to database");
})
.catch(err => {
  console.log(err);
});

// Routes
app.use('/user', userRoute);
app.use('/contact', contactRoute);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    msg: 'bad request'
  });
});

module.exports = app;