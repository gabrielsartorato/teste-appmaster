import { Router } from 'express';

import { herosRouter } from './Heros/heros.routes';

const routes = Router();

routes.use('/api', herosRouter);

export { routes };
