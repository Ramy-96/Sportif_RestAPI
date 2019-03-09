import { config } from 'dotenv'; //configuration de .env pour importer leurs variables d'environnement

import dataBaseConnexion from './db/dbConnect';
import setupRestApi from './api'
config();
console.log(process.env.DATABASE_NAME)

const { DATABASE_NAME, REST_API_PORT = 3000 } = process.env //object distraction (const  DATABASE_NAME = process.env.DATABASE_NAME )

const mongo_url=`mongodb://localhost/${DATABASE_NAME}`; //initialisation url de la base
dataBaseConnexion(mongo_url).then(()=> {
    setupRestApi(REST_API_PORT)
}).catch((err) => console.error('error', error))
//pour connecté la fichier server.js avec la base mongo db on utilisons MongiClient
// MongoClient.connect(mongo_url, { useNewUrlParser: true }, (err,client)=>{
//     assert.equal(err,null,'database connection failed') //une fonction if qui vérifie l'erreur

//     const db= client.db(dataBase) //fonction callback

//         /*
//     app.post('/new_product',(req,res)=>{
//     let newProduct= req.body
//     db.collection('products').insertOne(newProduct,(err,data)=>{
//     if(err) res.send('cant add product')
//     else res.send('product add')
//     })
//     })

    
//     app.get('/products',(req,res)=>{
//         db.collection('products').find().toArray((err,data)=>{
//             if(err) res.send('cant fech products')
//             else res.send(data)
//         })
//     })
   

//     app.put('/modify_product/:id',(req, res)=>{
//         let id=ObjectID(req.params.id)
//         let modifiedProduct= req.body
//         db.collection('products').findOneAndUpdate({_id: id}, {...modifiedProduct}, (err, data)=>{
//             if(err) res.send('cant update id product')
//             else res.send(data)
//         } )
//     })*/

//     // app.delete('/delete_product/:id',(req,res)=>{
//     //     let productToRemodeId=ObjectID(req.params.id )
//     //     db.collection('products').findOneAndDelete({_id: productToRemodeId},(err,data)=>{
//     //         if(err) res.send('cant delete product')
//     //         else res.send('product was delete')
//     //     })
//     // })


// })



