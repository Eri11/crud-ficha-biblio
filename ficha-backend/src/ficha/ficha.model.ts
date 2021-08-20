import * as mongoose from 'mongoose';

// Se define la estructura de la colección en Mongo
export const FichaSchema = new mongoose.Schema({
  name: { type: String, required: false },
  mid_n: { type: String, required: false },
  last_n: { type: String, required: false },
  titulo: { type: String, required: false },
  years: { type: String, required: false },
  ciudad: { type: String, required: false },
  editorial: { type: String, required: false },
});

// Interface, sirve para el transporte de datos B.E. <-> F.E.
export interface Ficha extends mongoose.Document {
  id: string;
  name: string;
  mid_n: string;
  last_n: string;
  titulo: string;
  years: string;
  ciudad: string;
  editorial: string;
}
