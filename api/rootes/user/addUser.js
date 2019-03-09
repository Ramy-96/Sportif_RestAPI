import express from 'express'
import userModel from '../../../db/models/Users'
const { Router } = express;
const router = Router();

router.post('/addUser', function({ body }, res, next) {

  userModel.create(body).then(function(user){
      res.send(user);
  }).catch(next);
});
export default router