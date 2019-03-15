import express from 'express'
import ressourceModel from '../../../db/models/Ressource'
const { Router } = express;
const router = Router();

router.post('/addRessource', function({ body }, res, next) {

  ressourceModel.create(body).then(function(ressource){
      res.send(ressource);
  }).catch(next);
});
export default router