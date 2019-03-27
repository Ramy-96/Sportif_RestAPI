import express from 'express'
import userModel from '../../../db/models/Users'
const { Router } = express;
const router = Router();

router.get('/getUser', function(req,res) {
  // res.send("hello")
  userModel.find(req.body).then(function(user){
    res.send(user);
}).catch((err) => {
  res.send('error')
});
});
export default router;