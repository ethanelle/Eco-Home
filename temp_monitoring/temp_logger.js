'use-strict';

const assert = require('assert');
const mongodb = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

function go() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.get('/', function(req, res) {
    mongodb.MongoClient.connect('mongodb://localhost:27017/temperature_db', {useUnifiedTopology: true}, async function(err, client) {
        assert.equal(null, err);

        const db = client.db('temperature_db');
        let result = await db.collection('temperatures').find().toArray();

        res.status(200).json([{'content': result}]);
    });
  });
  app.listen(2500);
  console.log(`PID: ${process.pid} Listening on port 2500.`);
}

go();