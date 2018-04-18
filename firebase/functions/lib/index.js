var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const yelp = require("yelp-fusion");
const cors = require("cors");
const apiKey = functions.config().yelp.key;
const client = yelp.client(apiKey);
const app = express();
const searchTerm = (term, location, radius, limit, open_now, price) => __awaiter(this, void 0, void 0, function* () {
    const result = yield client
        .search({
        term,
        location,
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
});
const getReviews = (id) => __awaiter(this, void 0, void 0, function* () {
    const result = yield client
        .reviews(id)
        .then(response => response.jsonBody.reviews);
    return result;
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const { term, location, radius, resultsLimit, openNow, price } = req.body;
    const results = yield searchTerm(term, location, radius, resultsLimit, openNow, price);
    res.send(results);
}));
app.get("/reviews/:id", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const reviews = yield getReviews(req.params.id);
    res.send(reviews);
}));
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map