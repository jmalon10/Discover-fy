import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { artistRoute } from './artist-route.js' 

const router = Router();

router.use('/users', userRouter);
router.use('/artists', artistRoute);


export default router;
