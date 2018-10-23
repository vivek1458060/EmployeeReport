const path = require('path');
const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(3000, () => {
  console.log(`started up at port 3000`);
});
