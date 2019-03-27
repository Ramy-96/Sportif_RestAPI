import express from 'express'
import reservationModel from '../../../db/models/Reservations'
const { Router } = express;
const router = Router();

router.post('/addReservation', function({ body }, res, next) {

  reservationModel.create(body).then(function(reservation){
      res.send(reservation);
  }).catch(next);
});
export default router