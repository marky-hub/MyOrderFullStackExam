const express = require('express');
const mongodb = require('mongodb');
const shortid = require('shortid');
const base62 = require('base62');

const app = express();
const cors = require('cors');
app.use(cors());
// Replace with your own MongoDB connection string
const connectionString = 'mongodb+srv://pongpat:13SEJIHeCf34tkbw@pongpatmyorderexam.xjn6ofz.mongodb.net/MyOrderExamDatabase';
                          
// Use connect method to connect to the server
mongodb.MongoClient.connect(connectionString, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db('shortenUrl');
  const collection = db.collection('urls');

  app.get('/:id', async (req, res) => {
    const id = req.params.id;
    const doc = await collection.findOne({ id });
    if (!doc) {
      res.send('Invalid URL');
      return;
    }

    var url = doc.url;
    if (!url.match(/^http\..*/i) || !url.match(/^https\..*/i))
    {
      return res.redirect(301, "https://" + url);
    }
    else 
    {
      return res.redirect(url);
    }

  });

  app.get('/new/:url(*)', async (req, res) => {
    const url = req.params.url;
    const id = shortid.generate();
    const doc = { url, id };
    await collection.insertOne(doc);
    res.send(`http://localhost:3000/${id}`);
  });

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
});