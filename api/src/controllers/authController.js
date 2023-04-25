const { google } = require('googleapis');

const { oauth2Client } = require('../middlewares/google.js');

const authGoogle = async (req, res) => {
  try {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    });

    const { code } = req.query;

    if (!code) {
      res.redirect(authUrl);
    }

    const { tokens } = await oauth2Client.getToken(code);

    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: 'v2',
    });

    const { data } = await oauth2.userinfo.get();

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {};

const login = async (req, res) => {};

module.exports = { authGoogle, register, login };
