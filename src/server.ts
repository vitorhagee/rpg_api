import express from 'express';
import {itemroutes} from "./routes/item.routes";

const app = express();

app.use(express.json());

app.use(itemroutes);

app.listen(3001,() =>
    console.log('Server is running on port 3001')
)