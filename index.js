var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    request = require('request'),
    token = process.env.TOKEN,
    hookUrl = process.env.HOOK_URL,
    redmineUrl = process.env.REDMINE_URL;

app.use(bodyParser.urlencoded({extended: true}));
app.listen(process.env.PORT || 3000);

app.post('/slack', function(req, res) {
  if (req.body.token != token)
    return res.status(401).send();

  var issue = req.body.text.replace(/#/, ''),
      issueUrl = redmineUrl + issue,
      channel = req.body.channel_id;

  request.post(hookUrl, {
    json: true,
    body: {
      text: '<' + issueUrl + '|' + issueUrl + '>',
      channel: channel
    }
  });

  // send a non-200 response so the slash command don't show for the user who sent it - we only want to see the webhook response
  res.status(201).send();
});
