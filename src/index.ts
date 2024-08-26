import express from 'express';
import path from 'path';
import connectDB from './db';
import studentRoutes from './routes/studentRoutes';

const app = express();
const PORT =3003;



connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/users'));



app.use('/', studentRoutes);
// app.get('/', (req, res) => {
//     res.send('Hello World');
//   });
  

app.use((req, res) => {
  res.status(404).send('There is an error on index');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
