import express from 'express'

import addUser from './user/addUser'
import deleteUser from './user/deleteUser'
import updateUser from './user/updateUser'

const { Router } = express;
const router = Router();

router.use(addUser);
router.use(deleteUser);
router.use(updateUser);

export default router