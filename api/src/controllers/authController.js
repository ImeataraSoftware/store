require('dotenv').config();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const CryptoJS = require('crypto-js');

const { Customer } = require('../database.js');

const { JWT, CRYPTO_KEY, CRYPTO_IV } = process.env;

const logUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      address,
      city,
      zipCode,
      country,
      phone,
    } = req.body;

    const missingFields = [];

    if (!firstName) missingFields.push('first name');

    if (!lastName) missingFields.push('last name');

    if (!email) missingFields.push('email');

    if (!password) missingFields.push('password');

    if (!address) missingFields.push('address');

    if (!city) missingFields.push('city');

    if (!zipCode) missingFields.push('zip code');

    if (!country) missingFields.push('country');

    if (!phone) missingFields.push('phone');

    if (missingFields.length > 0) {
      const fields = missingFields.join(', ');

      return res
        .status(400)
        .json({ message: `Please provide your ${fields}.` });
    }

    const verifyCustomer = await Customer.findOne({ where: { email } });

    if (verifyCustomer) {
      return res
        .status(409)
        .json({ message: 'The email is already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCustomer = await Customer.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      city,
      zipCode,
      country,
      phone,
    });

    const token = jwt.sign({ id: newCustomer.id }, JWT);

    const response = {
      id: CryptoJS.AES.encrypt(newCustomer.id, CRYPTO_KEY).toString(),

      firstName: CryptoJS.AES.encrypt(
        newCustomer.firstName,
        CRYPTO_KEY
      ).toString(),

      lastName: CryptoJS.AES.encrypt(
        newCustomer.lastName,
        CRYPTO_KEY
      ).toString(),

      email: CryptoJS.AES.encrypt(newCustomer.email, CRYPTO_KEY).toString(),

      address: CryptoJS.AES.encrypt(newCustomer.address, CRYPTO_KEY).toString(),

      city: CryptoJS.AES.encrypt(newCustomer.city, CRYPTO_KEY).toString(),

      zipCode: CryptoJS.AES.encrypt(newCustomer.zipCode, CRYPTO_KEY).toString(),

      country: CryptoJS.AES.encrypt(newCustomer.country, CRYPTO_KEY).toString(),

      phone: CryptoJS.AES.encrypt(newCustomer.phone, CRYPTO_KEY).toString(),

      token,
    };

    return res.status(201).json({ message: 'Successful log up.', response });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Failed log up.', error: error.message });
  }
};

const logupGoogle = async (req, res) => {};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const missingFields = [];

    if (!email) missingFields.push('email');

    if (!password) missingFields.push('password');

    if (missingFields.length > 0) {
      const fields = missingFields.join(', ');

      return res
        .status(400)
        .json({ message: `Please provide your ${fields}.` });
    }

    const verifyCustomer = await Customer.findOne({
      where: { email: email },
    });

    if (!verifyCustomer) {
      return res.status(401).json({ message: 'The email could not be found.' });
    }

    const matchPassword = await bcrypt.compare(
      password,
      verifyCustomer.password
    );

    if (!matchPassword) {
      return res.status(401).json({ message: 'The password is incorrect.' });
    }

    const token = jwt.sign({ id: verifyCustomer.id }, JWT);

    const response = {
      id: CryptoJS.AES.encrypt(verifyCustomer.id, CRYPTO_KEY).toString(),

      firstName: CryptoJS.AES.encrypt(
        verifyCustomer.firstName,
        CRYPTO_KEY
      ).toString(),

      lastName: CryptoJS.AES.encrypt(
        verifyCustomer.lastName,
        CRYPTO_KEY
      ).toString(),

      email: CryptoJS.AES.encrypt(verifyCustomer.email, CRYPTO_KEY).toString(),

      address: CryptoJS.AES.encrypt(
        verifyCustomer.address,
        CRYPTO_KEY
      ).toString(),

      city: CryptoJS.AES.encrypt(verifyCustomer.city, CRYPTO_KEY).toString(),

      zipCode: CryptoJS.AES.encrypt(
        verifyCustomer.zipCode,
        CRYPTO_KEY
      ).toString(),

      country: CryptoJS.AES.encrypt(
        verifyCustomer.country,
        CRYPTO_KEY
      ).toString(),

      phone: CryptoJS.AES.encrypt(verifyCustomer.phone, CRYPTO_KEY).toString(),

      token,
    };

    return res.status(200).json({ message: 'Successful login.', response });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Failed log in.', error: error.message });
  }
};

const logInGoogle = async (req, res) => {};

module.exports = { logUp, logupGoogle, logIn, logInGoogle };
