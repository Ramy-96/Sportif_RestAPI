import express from 'express'
import userModel from '../../../db/models/Users'
const { Router } = express;
const router = Router();

router.getById('/getUser/:id', function({ body }, res, next) {
  userModel.getById(body).then(function(user){
      res.send(user);
  }).catch(next);

});
export default router;