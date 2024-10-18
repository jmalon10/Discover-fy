// getTopTracks method
// /2.0/?method=artist.gettoptracks&artist=cher&api_key=YOUR_API_KEY&format=json

import express from 'express';
import type { Request, Response } from 'express';


const router = express.Router();

// GET /api/artists/tracksByArtist 
router.get('/tracksByArtist', async (req: Request, res: Response) => {
  try {
    const {artist} = req.body;

    const response = await fetch(
        // get tracks from lastfm by artist
        `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${artist}
        &api_key=39e9d03aad187addccc2e2fba21169b0&format=json`);


    // send the tracks as json
     const tracks = await response.json();
     return res.json(tracks);


    // res.json(users);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

// // GET /users/:id - Get a user by id
// router.get('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findByPk(id, {
//       attributes: { exclude: ['password'] }
//     });
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // POST /users - Create a new user
// router.post('/', async (req: Request, res: Response) => {
//   const { username, email, password } = req.body;
//   try {
//     const newUser = await User.create({ username, email, password });
//     res.status(201).json(newUser);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // PUT /users/:id - Update a user by id
// router.put('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const { username, password } = req.body;
//   try {
//     const user = await User.findByPk(id);
//     if (user) {
//       user.username = username;
//       user.password = password;
//       await user.save();
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // DELETE /users/:id - Delete a user by id
// router.delete('/:id', async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findByPk(id);
//     if (user) {
//       await user.destroy();
//       res.json({ message: 'User deleted' });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// });

export { router as artistRoute };
