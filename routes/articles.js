const express = require('express');
const Articles = require('../models/articles');

const router = express.Router();

//REQUEST ALL ARTICLES
router.get('/', (req, res) => {
    Articles.find()
        .then(article => {
            res.json(article)
        }).catch(err => {
            res.status(400).json(`Error: ${err}`)
        });
});

//ADD NEW ARTICLE
router.post('/add', (req, res) => {
    const new_article = new Articles({
        title: req.body.title,
        article: req.body.article,
        author: req.body.author,
    });

    new_article.save().then(() => {
        res.json('The new article has been posted succesfully.')
    }).catch((err) => {
        res.status(400).json(`Error: ${err}`)
    });
})

//FIND ARTICLE BY ID
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id).then((article) => {
        res.json(article)
    }).catch((err) => {
        res.status(400).json(`Error: ${err}`)
    });
});

//FIND ARTICLE BY ID AND UPDATE
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id).then((article) => {
        article.title = req.body.title;
        article.article = req.body.article;
        article.author = req.body.author;

        article.save().then(() => {
            res.json('The article has been updated successfully.');
        }).catch((err) => {
            res.status(400).json(`Error: ${err}`);
        })

    }).catch((err) => {
        res.status(400).json(`Error: ${err}`)
    });
});

//FIND ARTICLE BY ID AND DELETE
router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id).then(() => {
        res.json('Article has been successfully deleted.');
    }).catch((err) => {
        res.status(400).json(`Error: ${err}`);
    })
})

module.exports = router;