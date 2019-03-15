import express from 'express'
import ressourceModel from '../../../db/models/Ressource'
const { Router } = express;
const router = Router();

router.delete('/deleteRessource', function({ body }, res, next) {
  ressourceModel.deleteOne(body).then(function(ressource){
      res.send(ressource);
  }).catch(next);

});
export default router;