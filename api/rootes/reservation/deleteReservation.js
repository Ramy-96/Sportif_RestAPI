import express from 'express'
import reservationModel from '../../../db/models/Reservations'
const { Router } = express;
const router = Router();

router.delete('/deleteReservation', function({ body }, res, next) {
  reservationModel.deleteOne(body).then(function(reservation){
      res.send(reservation);
  }).catch(next);

});
export default router;