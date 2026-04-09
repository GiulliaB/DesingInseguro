import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import userRoutes from './ControllerUsuario.js';

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(3002, () => {
    console.log('API porta 3002');
});
