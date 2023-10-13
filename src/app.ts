import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import exerciseRouter from './routers/exerciseRouters';
import bodyParser from 'body-parser'
import router from './routers/exerciseRouters';

const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}))

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

app.use('/exercise', exerciseRouter)

export default app;