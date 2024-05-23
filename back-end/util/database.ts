import { MongoClient } from 'mongodb';
const mongoClient = require('mongodb').MongoClient

export const mongoConnect = (callback: Function) => {
    mongoClient.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@flow.qpnpq68.mongodb.net/?retryWrites=true&w=majority&appName=flow`,
    )
        .then((client: MongoClient) => {
            console.log('Connected')
            callback(client)
        })
        .catch((err: String) => console.log(err))
}

module.exports = mongoConnect
