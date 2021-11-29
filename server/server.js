const mongoose=require("mongoose");
const express=require("express");
const app=express();
const cors = require('cors')
 
app.use(cors())

require("dotenv/config");
mongoose.connect(
    process.env.MONGO_URI,
    () => {
      console.log("You're connected to the database");
    }
  );
app.get('/',(req,res)=>{
  res.send('hello to invetory app')
})
app.use(express.json());
app.use('/Commandes', require('./routes/commandeRoute.js'))
app.use('/Fournisseurs', require('./routes/fournisseurRoute.js'))
app.use('/Produits', require('./routes/produitRoute.js'))
app.use('/Clients', require('./routes/clientRoute.js'))
app.use('/Users', require('./routes/userRoute.js'))

app.listen(process.env.PORT,()=> console.log('listening on port '+ process.env.PORT))