const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { Customer } = require('../database.js');

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

    if (!firstName) {
      return res
        .status(400)
        .json({ message: 'Please provide your first name.' });
    }
    if (!lastName) {
      return res
        .status(400)
        .json({ message: 'Please provide your last name.' });
    }
    if (!email) {
      return res.status(400).json({ message: 'Please provide your email.' });
    }
    if (!password) {
      return res.status(400).json({ message: 'Please provide your password.' });
    }
    if (!address) {
      return res.status(400).json({ message: 'Please provide your address.' });
    }
    if (!city) {
      return res.status(400).json({ message: 'Please provide your city.' });
    }
    if (!zipCode) {
      return res.status(400).json({ message: 'Please provide your zipCode.' });
    }
    if (!country) {
      return res.status(400).json({ message: 'Please provide your country.' });
    }
    if (!phone) {
      return res.status(400).json({ message: 'Please provide your phone.' });
    }

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !address ||
      !city ||
      !zipCode ||
      !country ||
      !phone
    ) {
      return res.status(400).json({
        message:
          'Please provide your first name, last name, email, password, address, city, zipCode, country, phone.',
      });
    }

    const verifyCustomer = await Customer.findOne({
      where: { email: email },
    });

    if (verifyCustomer) {
      return res
        .status(409)
        .json({ message: 'The email is already registered' });
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

    return res
      .status(201)
      .json({ message: 'Successful registration', customer: newCustomer });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Failed registration', error: error.message });
  }
};

const logupGoogle = async (req, res) => {};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Please provide your email.' });
    }

    if (!password) {
      return res.status(400).json({ message: 'Please provide your password.' });
    }

    if (!email || !password) {
      return res.status(400).json({
        message: 'Please provide your email and password.',
      });
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

    const token = jwt.sign({ id: verifyCustomer.id }, 'store', {
      expiresIn: '12h',
    });

    return res
      .status(200)
      .json({ message: 'Successful login.', customer: verifyCustomer, token });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Failed log in.', error: error.message });
  }
};

const logInGoogle = async (req, res) => {};

const logOut = async (req, res) => {};

module.exports = { logUp, logupGoogle, logIn, logInGoogle, logOut };
