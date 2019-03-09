import bodyParser from 'body-parser'; //import le module body-parser
import express from 'express'; //import express

import root from './rootes'

export default async (port) => {
  const app = express();
  app.use(bodyParser.json()); //configurer body parser comme middlware
  app.use('/', root); 
  app.listen(port ,(err)=>{
    if(err) console.log(" server err")
    else console.log( `server is running on port: ${port}`)
  })  
} 