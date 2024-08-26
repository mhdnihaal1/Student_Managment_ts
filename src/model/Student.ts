import mongoose, { Document, Schema } from 'mongoose';

interface IStudent extends Document {
  name: string;
  age: number;
  grade: number;
}

const StudentSchema: Schema = new Schema({
  name: { type: String},
  age: { type: Number },
  grade: { type: Number } 
});

const Student = mongoose.model<IStudent>('Student', StudentSchema);

export default Student;
