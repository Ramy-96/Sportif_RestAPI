import express from 'express'

import addUser from './user/addUser'
import deleteUser from './user/deleteUser'
import updateUser from './user/updateUser'
import getUser from './user/getUser'
import addRessource from './ressource/addRessource'
import updateRessource from './ressource/updateRessource'
import deleteRessource from './ressource/deleteRessource'



const { Router } = express;
const router = Router();

router.use(getUser);
router.use(addUser);
router.use(deleteUser);
router.use(updateUser);
router.use(addRessource);
router.use(deleteRessource);
router.use(updateRessource);


export default router