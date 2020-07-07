// Imports
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentRouter.js';


// conexao ao MongoDB via Mangoose
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:root123@bootcamp.ri70b.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  } catch (err) {
    console.log("Erro de conexão: " + err);
  }
})();

const app = express();


// definir o tipo de informação que vai trafegar na API
app.use(express.json());
app.use(studentRouter);

//qual porta a aplicacao vai ta escutando
app.listen(3000, () => console.log('API Iniciada'));

