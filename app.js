// Imports
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

// conexao ao MongoDB viaMangoose
(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@bootcamp.ri70b.mongodb.net/grades?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  } catch (err) {
    console.log("Erro de conexão: " + err);
  }
})();


// definir o tipo de informação que vai trafegar na API
app.use(express.json());
app.use(studentRouter);

//qual porta a aplicacao vai ta escutando
app.listen(process.env.PORT, () => console.log('API Iniciada'));

