import express from 'express'
import userModel from '../../../db/models/Users'
const { Router } = express;
const router = Router();

router.delete('/deleteUser', function({ body }, res, next) {
  userModel.deleteOne(body).then(function(user){
      res.send(user);
  }).catch(next);

});
export default router;