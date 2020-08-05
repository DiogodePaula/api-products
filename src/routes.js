import { Router } from 'express';
import cors from 'cors';

import ProductController from './app/controllers/ProductController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json('products-API'));

routes.get('/product/:uid', ProductController.show);
routes.get('/product', ProductController.index);
routes.post('/product', ProductController.store);
routes.put('/product/:uid', ProductController.update);
routes.delete('/product/:uid', ProductController.delete);

export default routes;
