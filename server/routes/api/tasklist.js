const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async(req, ress) => {
    const tasklist = await loadTasksCollection()
    ress.send(await tasklist.find({}).toArray());
});

// Add Post
router.post('/', async(req, res) => {
    const tasklist = await loadTasksCollection();
    await tasklist.insertOne({
        task: req.body.task,
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
    const tasklist = await loadTasksCollection();
    await tasklist.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadTasksCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://Sovattra:1234@sovattra.zvnoi.mongodb.net/my_tasklist?retryWrites=true&w=majority', {useNewUrlParser: true}
);

return client.db('vue_express').collection('tasklist');
}
module.exports = router;