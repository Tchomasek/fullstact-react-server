module.exports = (sequelize, DataTypes) => {
  const Completions = sequelize.define("Completions", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Completions;
};
