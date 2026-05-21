import { Request, Response } from "express"
import {itemService} from '../services/ItemService';

export class ItemController {
    async create(req:Request, res:Response){
        const{
            name,
            type,
            weight,
            rarity,
            price,
            quantity,
            description
        } = req.body;

        const service = new itemService();

        const result = await service.create({
            name,
            type,
            weight,
            rarity,
            price,
            quantity,
            description
        }) 
        return res.json(result)
    }
}