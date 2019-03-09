import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const UsersSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    }
  },
  {
    timestamps: true,
    collection: 'Users'
})

export default mongoose.model('Users', UsersSchema)