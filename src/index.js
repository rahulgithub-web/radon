const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let url = "mongodb+srv://axios:yUctOFWf8YN0wcC2@cluster0.dkho9cl.mongodb.net/test";
let port = process.env.PORT || 5000;

mongoose.connect(url, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use('/', route);


app.listen(port, function () {
    console.log('Express app running on port ' + (port))
});

// yUctOFWf8YN0wcC2