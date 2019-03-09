import express from 'express'

import addUser from './user/addUser'

const { Router } = express;
const router = Router();

router.use(addUser);

export default router