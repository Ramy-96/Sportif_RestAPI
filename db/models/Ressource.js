import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const RessourceSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    price: {
      type: String,
    },
    rating: {
      type: String,
    }
  },
  {
    timestamps: true,
    collection: 'Ressource'
})

export default mongoose.model('Ressource', RessourceSchema)