const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { Customer } = require('../database.js');

const register = async (req, res) => {
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
          'Please provide your firstName, lastName, email, password, address, city, zipCode, country, phone',
      });
    } else {
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
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Failed registration', error: error.message });
  }
};

const registerGoogle = async (req, res) => {};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Please provide your email and password' });
    } else {
      const verifyCustomer = await Customer.findOne({ where: email });

      if (!verifyCustomer) {
        return res
          .status(401)
          .json({ message: 'The email could not be found' });
      }

      const matchPassword = await bcrypt.compare(
        password,
        verifyCustomer.password
      );

      if (!matchPassword) {
        return res.status(401).json({ message: 'The password is incorrect.' });
      }

      return res
        .status(200)
        .json({ message: 'Successful login', customer: verifyCustomer });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Failed log in', error: error.message });
  }
};

const logInGoogle = async (req, res) => {};

const logOut = async (req, res) => {};

module.exports = { register, registerGoogle, logIn, logInGoogle, logOut };
