const express = require('express');
const routes = require("./routes");
const bot = require('./bot')
const cors = require('cors');  

const app = express();

new bot();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333);