const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Customer', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    zipCode: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
  });
};
