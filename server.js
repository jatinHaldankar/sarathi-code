const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config(); 

const jwtSecret = process.env.JWT_SECRET;
const path=require("path");
const app = express();

app.use(express.static(path.join(__dirname,"/client/build")));

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"/client/build/index.html"));
});

mongoose.connect(process.env.DB_CONNECTION_URL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://sarathi-359y.onrender.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


const UserSchema = new mongoose.Schema({
  name: String,
  location: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model('User', UserSchema);

app.post("/signupData", async (req, res) => {

  const salt = await bcrypt.genSalt(10);
  let securePassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    name: req.body.name,
    location: req.body.location,
    email: req.body.email,
    password: securePassword
  });

  newUser.save().then(() => {
    res.json({ success: true });
  }).catch((err) => {
    console.log(err);
    res.json({ success: false });
  })
})

app.post("/loginData", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    if (!user) {
      res.json({ success: false });
    } else {
      bcrypt.compare(password, user.password).then((ans) => {
        if (ans) {
          const data = {
            user: {
              id: user.id
            }
          }
          const authToken = jwt.sign(data, jwtSecret);
          res.json({ success: true, authToken: authToken });
        }
        else {
          res.json({ success: false });
        }
      });
    }

  }).catch((err) => {
    // console.log(err);
    res.json({ success: false });
  });
})


const ngoSchema = new mongoose.Schema({
  name: String,
  website: String,
  description: String,
  img: String
})

const Ngo = mongoose.model('Ngo', ngoSchema);

app.post("/ngoData", (req, res) => {
  Ngo.find().then((ngo) => {
    res.send(ngo);
  }).catch((err) => {
    console.log(err);
  })
})


const schemeSchema = new mongoose.Schema({
  name: String,
  beneficiary: String,
  descreption: String,
  age: String,
  link: String,
})

const Scheme = mongoose.model('Scheme', schemeSchema);

app.post("/schemeData", (req, res) => {
  Scheme.find().then((scheme) => {
    res.send(scheme);
  }).catch((err) => {
    console.log(err);
  })
})

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  problem: String
})

const Contact = mongoose.model("Contact", contactSchema);

app.post('/contactData', (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    problem: req.body.problem
  })

  newContact.save().then(() => {
    res.json({ success: true, message: "your problem will resloved soon!" })
  }).catch((err) => {
    console.error(err);
    res.json({ success: false, message: "try after some time" });
  })
})

const watchListSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  listData: {
    type: Array,
    required: true
  }
})

const WatchList = mongoose.model("WatchList", watchListSchema);
app.post('/addToWatchList', async (req, res) => {
  try {
    isAdded = false;
    let watchlist = await WatchList.findOne({ email: req.body.email });

    if (!watchlist) {
      watchlist = new WatchList({
        email: req.body.email,
        listData: [req.body.name]
      });
      isAdded = true;
    } 
    else {
      if (!watchlist.listData.includes(req.body.name)) {
        watchlist.listData.push(req.body.name);
        isAdded = true;
        
      }
    }
    await watchlist.save();

    if(isAdded) {
    res.json({ success: true,message:"Added to the watchlist"});
    }
    else{
      res.json({ success: true,message:"Already in the watchlist"});
    }
  } catch (error) {
    res.json({ success: false,message:"Failed to add item to watchlist."});
  }
});


app.post('/watchlistData', (req, res) => {
  WatchList.findOne({ email: req.body.email }).then((watchlist) => {
    if (watchlist) {
      res.send(watchlist.listData);
    }
  })
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})