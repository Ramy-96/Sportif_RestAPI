import { config } from 'dotenv'; //configuration de .env pour importer leurs variables d'environnement

import dataBaseConnexion from './db/dbConnect';
import setupRestApi from './api'
config();

const { DATABASE_NAME, REST_API_PORT = 3000 } = process.env //object distraction (const  DATABASE_NAME = process.env.DATABASE_NAME )

const mongo_url=`mongodb://localhost/${DATABASE_NAME}`; //initialisation url de la base
dataBaseConnexion(mongo_url).then(()=> {
    setupRestApi(REST_API_PORT)
}).catch((err) => console.error('error', error))
