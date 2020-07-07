import mongoose from 'mongoose';

//criacao de schema com o modelo, definindo tipo p cada campo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    //Validacao se a nota inserida e' menor que zero
    validate(value) {
      if (value < 0) throw new Error('Valor negativo para nota');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
