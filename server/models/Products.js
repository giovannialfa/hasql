module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    countInStock: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    numReviews: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });

  return Products;
};
