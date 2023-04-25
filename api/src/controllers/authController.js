const { google } = require('googleapis');

const { oauth2Client } = require('../middlewares/google.js');

const authGoogle = async (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile'],
  });
  res.redirect(authUrl);
};

const register = async (req, res) => {};

const login = async (req, res) => {};

module.export = { authGoogle, register, login };
