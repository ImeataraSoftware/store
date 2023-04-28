const { google } = require('googleapis');

const { oauth2Client } = require('../middlewares/google.js');

const register = async (req, res) => {};

const logIn = async (req, res) => {};

const logInGoogle = async (req, res) => {
  try {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    });

    const { code } = await req.query;

    if (!code) {
      res.redirect(authUrl);
    }

    if (code) {
      const { tokens } = await oauth2Client.getToken(code);

      oauth2Client.setCredentials(tokens);

      const oauth2 = google.oauth2({
        auth: oauth2Client,
        version: 'v2',
      });

      const { data } = await oauth2.userinfo.get();

      res.send(data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error' });
  }
};
// http://localhost:3001/auth/auth-google

const logOut = async (req, res) => {};

module.exports = { register, logIn, logInGoogle, logOut };
