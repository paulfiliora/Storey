/* express app as a webtask */

var Express = require('express');
var Webtask = require('webtask-tools');
var app = Express();

app.use(require('body-parser').json());

// POST
app.post('https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19', function (req, res) {
    // res.json(req.body);
    res.json({text: 'Hello this is a test!'});
});

// GET
app.get('*', function (req, res) {
    res.json({ id: 1 });
});

// PUT
app.put('*', function (req, res) {
    res.json({ id: 1 });
});

// DELETE
app.delete('*', function (req, res) {
    res.json({ id: 1 })
});

// expose this express app as a webtask-compatible function

module.exports = Webtask.fromExpress(app);



// curl --user "f26ec927-b4a8-4020-aaac-fcdf8df4df6e":"V1FYHUEY6aPa" \
// --header "Content-Type: application/json" \
// --data  "{\"text\": \"Hi Team, I know the times are difficult! Our sales have been disappointing for the past three quarters for our data analytics product suite. We have a competitive data analytics product suite in the industry. But we need to do our job selling it! \"}" \
// "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19"
