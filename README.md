# slack-redmine-urls

listens for slack `/redmine` command and sends a url for the specified redmine issue to a slack incoming webhook to be posted in the channel from which the slash command was sent.

## usage

in slack: `/redmine #issue` or `/redmine issue` where issue is the issue number

on your server: set the env vars then `npm install && node index.js`

## env vars
  - `TOKEN` - slack slash command auth token
  - `HOOK_URL` - slack incoming webhook url
  - `REDMINE_URL` - redmine url (e.g. http://redmine.me.com/issues/)
  - `PORT` - optional. port to listen on. defaults to 3000
