module.exports = function(sequelize, DataTypes) {
    var Vol = sequelize.define("Vols", {
      volName: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
          len: [1]
        }
      },
      volZip: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      volEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      aboutMe: {
          type: DataTypes.STRING,
          validate: {
            len: [1]
          }
      }
    });
    return Vol;
  };