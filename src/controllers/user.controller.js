
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getUsers = async(req, res) => {
    const usuarios = await prisma.user.findMany()
    if(usuarios.length === 0){
        return res.status(404).json({msg: "No hay usuarios registrados"})
    }

    prisma.$disconnect()
    return res.json(usuarios)
}

const createUser = async(req, res) => {
    const { name, email ,password} = req.body
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password            
        }
    })

    prisma.$disconnect()

    return res.json(user)
}




export default { 
    getUsers,
    createUser
}