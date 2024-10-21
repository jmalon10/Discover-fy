import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { artistRoute } from './artist-route.js' 
import { playlistRouter } from './playlist-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/artists', artistRoute);
router.use('/playlists', playlistRouter);


export default router;
