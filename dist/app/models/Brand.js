"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Brand extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primarykey: true,
          allowNull: false,
          type: _sequelize2.default.UUID,
          defaultValue: _sequelize2.default.UUIDV4,
        },
        name: {
          allowNull: false,
          type: _sequelize2.default.STRING,
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

exports. default = Brand;
