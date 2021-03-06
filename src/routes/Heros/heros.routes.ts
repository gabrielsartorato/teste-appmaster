import { Router } from 'express';
import { HerosController } from '../../controllers/HerosController';

export const herosRouter = Router();

const herosController = new HerosController();

herosRouter.get('/search', herosController.index);
herosRouter.get('/hero/:slug', herosController.show);
