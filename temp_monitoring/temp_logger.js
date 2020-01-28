'use-strict';

const mqtt = require('mqtt');
const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;
const assert = require('assert');

function getTimestamp() {
    const timestamp = new Date();
    const day = timestamp.getDate();
    const month = timestamp.getMonth() + 1;
    const year = timestamp.getFullYear();
    const hour = timestamp.getHours();
    const min = timestamp.getMinutes();
    
    return month + '/' + day + '/' + year + ' ' + hour + ':' + min;
}

function go(database, collection_name, mqtt_port) {
    console.log('Connecting to database...');
    let collection;
    mongodbClient.connect(database, function(err, db) {
        if (err) throw err;
        collection = db.collection(collection_name);
    });
    let mqtt_client = mqtt.connect({host: 'localhost', port: mqtt_port});
    mqtt_client.subscribe(collection_name);
    mqtt_client.on('message', function(topic, message) {
        const time = getTimestamp();
        let obj = {
            _id: time,
            temperature: message,
        };
        collection.updateOne(obj, {upsert: true}, function(err, result) {
            assert.equal(null, err);
            assert.equal(1, result);
        });
    });
}

if (process.argv.length != 5) {
    console.log('Usage: node <program> <database_url> <collection_name> <mqtt_port>');
    process.exit(1);
}

const database = process.argv[2];
const collection_name = process.argv[3];
const mqtt_port = parseInt(process.argv[4], 10);

go(database, collection_name, mqtt_port);