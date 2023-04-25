const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  '171524819530-036miaoe2fqdhhrjp0988g6amih1hn52.apps.googleusercontent.com',
  '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',
  'http://localhost:3001/auth/callback'
);

module.exports = { oauth2Client };
