module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventDesc: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }

    },
    eventDate: {
      type: DataTypes.TEXT,
      allowNull: false,
    

    },

    eventTime: {
      type: DataTypes.TEXT,
      allowNull: false,

    },

    eventAddr : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },

    eventCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    },

    eventState: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }

    },

    eventZip : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5]
      }

    },

    eventDuration : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    eventSlots : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    eventCat: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Event.associate = function (models) {
    // We're saying that an event should belong to an Org
    // An Event can't be created without an Org due to the foreign key constraint
    Event.belongsTo(models.Org, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Event;
};
