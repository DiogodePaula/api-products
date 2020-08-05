import Sequelize, { Model } from 'sequelize';

class Brand extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primarykey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
    this.removeAttribute('id');
    return this;
  }
}

export default Brand;
