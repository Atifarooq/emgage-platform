const fs = require('fs');
const url = require('url');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const elasticsearch = require('elasticsearch')
const cors = require('cors');
const dotenv = require('dotenv').config();

// Set up Elastic Search Client
const bonsai_url = process.env.BONSAI_URL || "https://guqx1i71l0:2ghx17ht6@role-store-4717325882.us-east-1.bonsaisearch.net:443";
const client = new elasticsearch.Client({
  host: bonsai_url,
  log: 'trace'
});

// serve static files from public directory
const rootDir = path.resolve(__dirname);
app.use(cors());
app.use(express.static(rootDir));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

/* GET home page. */
function fetch_fn(req, res, next) {
  try {
    {
      // This is for backwards compability (BQA and BDEV) - where web app is served from a root path.
      res.sendFile(path.join(rootDir, 'src', 'index_nodestart.html'));
    }
  } catch (err) {
    console.log(err.message);
  }
}

function searchRoles(req, res, next) {
  try {
    {
      
      const queryObject = url.parse(req.url, true).query;
      const payload = {...queryObject, query: JSON.parse(queryObject.query)};
      
      client.search({
        body: payload,
        index: 'roledefs'
      })
        .then((e) => { res.json(e); })
        .catch((c) => { res.json(c) });
    }
  } catch (err) {
    console.log(err.message);
  }
}

app.get('/searchRoles', function (req, res, next) { searchRoles(req, res, next); });
app.get('/*', function (req, res, next) { fetch_fn(req, res, next); });

var listenPort = process.env.PORT || 3000

app.listen(listenPort, function () {
  console.log('Listening Port:', listenPort)
});
