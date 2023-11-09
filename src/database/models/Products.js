module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "products",
      timestamps: false,
      //createdAt: "created_at",
      //updatedAt: "updated_at",
      //deletedAt: false,
    }
  );

  return Model;
};
