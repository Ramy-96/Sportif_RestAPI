import express from 'express'
import userModel from '../../../db/models/Users'
const { Router } = express;
const router = Router();

router.put('/updateUser', function({ body: { query, data } }, res, next) {

  userModel.updateOne(query, data, { upsert: true, new: true }).then(function(user){
      res.send(user);
  }).catch(next);

});
export default router;