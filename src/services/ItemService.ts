import {prisma} from "../prisma/client"

interface createItemProps {
    name: string
    type: string
    weight: number
    rarity: string 
    price: number
    quantity: number
    description: string
}

export class itemService {

    async create(data: createItemProps){

        const item = await prisma.item.create({
            data
        })
        return item;
    }
}