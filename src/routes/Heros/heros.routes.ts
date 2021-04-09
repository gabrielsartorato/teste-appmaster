import { Router } from 'express';
import { HerosController } from '../../controllers/HerosController';

export const herosRouter = Router();

const herosController = new HerosController();

herosRouter.post('/search', herosController.index);
