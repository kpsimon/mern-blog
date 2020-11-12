const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const article_schema = new Schema({
    title: {type: String, required: true},
    article: {type: String, required: true},
    author: {type: String, required: true},
    articleImage: {type: String, required: true},
    postDate: {type: Date, default: Date.now}
});

const Articles = mongoose.model('Articles', article_schema);

module.exports = Articles;

