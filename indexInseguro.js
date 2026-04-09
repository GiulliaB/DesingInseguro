import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './ControllerUsuarioInseguro.js';

const app = express();
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(3001, () => {
    console.log('Api (insecure desing) porta 3001');
});
