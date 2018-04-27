module.exports = function(sequelize, DataTypes) {
    var Vols = sequelize.define("Vols", {
      name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
          len: [1]
        }
      },
      zip: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      aboutMe: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
      }
    });
    return vols;
  };