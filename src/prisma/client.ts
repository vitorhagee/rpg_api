import "dotenv/config"
// Gera o import do Dotenv e suas configurações

import { PrismaClient } from "@prisma/client"
// Importa o PrismaClient do pacote @prisma/client

export const prisma = new PrismaClient()
//cria a instancia de const de prisma, que é a classe PrismaClient, e a exporta para ser utilizada em outros arquivos do projeto.