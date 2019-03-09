import mongoose from 'mongoose';
export default async (uri) => {
	try {
     await mongoose.connect(uri, { useNewUrlParser: true })
      .then(() => console.log('DB connected successfuly !'))
      .catch(() => console.log('Faild to connect DB :/'));
	} catch (error) {
		console.error('Error db connexion', error);
	}
};
