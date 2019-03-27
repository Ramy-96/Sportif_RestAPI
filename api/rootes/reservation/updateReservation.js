import express from 'express'
import reservationModel from '../../../db/models/Reservations'
const { Router } = express;
const router = Router();

router.put('/updateReservation', function({ body: { query, data } }, res, next) {

  reservationModel.updateOne(query, data, { upsert: true, new: true }).then(function(reservation){
      res.send(reservation);
  }).catch(next);

});
export default router;