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
      res.redirect(authorizeUrl);
    }
  } catch (error) {}
};

const register = async (req, res) => {};

const login = async (req, res) => {};

module.exports = { authGoogle, register, login };
