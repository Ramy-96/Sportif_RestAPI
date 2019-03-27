import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const ReservationSchema = new mongoose.Schema({
    date: {
      type: string,
    },
    heure_deb: {
      type: String,
    },
    heure_fin: {
      type: String,
    },
    etat: {
      type: String,
    }
  },
  {
    timestamps: true,
    collection: 'Reservation'
})

export default mongoose.model('Reservation', ReservationSchema)