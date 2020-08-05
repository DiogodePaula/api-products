"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

class ProductController {
  async index(req, res) {
    try {
      const product = await _Product2.default.findAll();

      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const product = await _Product2.default.findOne({ where: { uid } });

      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const product = await _Product2.default.create(req.body);

      return res.json({ product });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await _Product2.default.update(req.body, { where: { uid } });

      return res.json({ updated });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await _Product2.default.destroy({ where: { uid } });

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

exports. default = new ProductController();
