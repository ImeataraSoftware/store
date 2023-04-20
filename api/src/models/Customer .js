const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Customer", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  });
};
