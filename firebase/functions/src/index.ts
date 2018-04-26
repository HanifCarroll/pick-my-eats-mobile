const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const yelp = require("yelp-fusion");
const cors = require("cors");

const apiKey = functions.config().yelp.key;
const client = yelp.client(apiKey);
const app = express();

const searchTerm = async (
  term,
  location,
  latitude,
  longitude,
  radius,
  limit,
  open_now,
  price
) => {
  const result = await client
    .search({
      term,
      location,
      latitude,
      longitude,
      radius,
      limit,
      open_now,
      price
    })
    .then(response => {
      return response.jsonBody;
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

const getReviews = async id => {
  const result = await client
    .reviews(id)
    .then(response => response.jsonBody.reviews);
  return result;
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", async (req, res, next) => {
  const {
    term,
    location,
    latitude,
    longitude,
    radius,
    resultsLimit,
    openNow,
    price
  } = req.body;
  const results = await searchTerm(
    term,
    location,
    latitude,
    longitude,
    radius,
    resultsLimit,
    openNow,
    price
  );
  res.send(results);
});

app.get("/reviews/:id", async (req, res, next) => {
  const reviews = await getReviews(req.params.id);
  res.send(reviews);
});

exports.api = functions.https.onRequest(app);
