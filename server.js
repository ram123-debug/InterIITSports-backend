const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const server = require("http").createServer(app);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(cors({
  origin: "*",
  methods: "GET, POST, PUT, PATCH, DELETE",
  credentials: true
}));

const drawsRoute = require('./routes/Draw');
const contactRoute = require('./routes/Contact');
const fixtureRoute = require('./routes/Fixture');
const userRoute = require('./routes/User');
const newsRoute = require('./routes/News');

app.use('/api/draws', drawsRoute);
app.use('/api/contact', contactRoute);
app.use('/api/fixture', fixtureRoute);
app.use('/api/users', userRoute);
app.use('/api/news', newsRoute);

app.use('/', (req, res) => {
  res.send('Inter IIT Sports server is Running')
})

const connect = mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`
)))
  .catch((error) => console.log(`${error} did not connect`));