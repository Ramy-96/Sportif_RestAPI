import express from 'express'
import ressourceModel from '../../../db/models/Ressource'
const { Router } = express;
const router = Router();

router.put('/updateRessource', function({ body: { query, data } }, res, next) {

  RessourceModel.updateOne(query, data, { upsert: true, new: true }).then(function(ressource){
      res.send(ressource);
  }).catch(next);

});
export default router;