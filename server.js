const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection established successfully.")
});

const articles_router = require('./routes/articles');
app.use('/articles', articles_router);

app.listen(PORT, () => {
    console.log(`App listening on PORT:${PORT}`)
})