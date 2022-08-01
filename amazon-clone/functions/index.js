const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51L0YC0Eas7U1SnBHYhDFXeZBTxWJKFYyG1MARNWfDl4i0zAE1TFX9wPqjSjOVulsc1azZxG3PQw9glaQa2E4knCP00VRc47VeZ')

//API

// - App config
const app = express();
//-Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM for this amount >>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//-Listen command
exports.api = functions.https.onRequest(app)

