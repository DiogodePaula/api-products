import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primarykey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        brand_uid: {
          type: Sequelize.UUID,
          references: {
            model: 'brands',
            key: 'uid',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        amount: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
      }
    );
    this.removeAttribute('id');
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Brand, {
      as: 'brand',
      foreignKey: 'brand_uid',
    }),
  }
}

export default Product;
