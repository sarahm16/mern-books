const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const books = require('./routes/api/books');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


//connect to mongoose database, connected to mongodb atlas
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://dbUser:dbPassword@cluster0.axlyw.mongodb.net/db?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  //|| "mongodb://sarahm16:1084829s@ds141320.mlab.com:41320/heroku_vpl36hst",
app.use("/api/books", books);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
