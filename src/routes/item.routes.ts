import {Router} from 'express';
import {ItemController} from '../controllers/ItemController';

const itemroutes = Router();

const itemController = new ItemController();

itemroutes.post("/itens", itemController.create);

export {itemroutes}