import Product from '../models/Product';
import Brand from '../models/Brand';

class ProductController {
  async index(req, res) {
    try {
      const product = await Product.findAll({
        attributes: ['uid', 'name', 'quantity', 'brande_uid']
      });

      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const product = await Product.findOne({ where: { uid } });

      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const product = await Product.create(req.body);

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
      const updated = await Product.update(req.body, { where: { uid } });

      return res.json({ updated });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await Product.destroy({ where: { uid } });

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new ProductController();
