import User from '../models/User.js'
import Role from '../models/Role.js'

import jwt from 'jsonwebtoken'
import config from '../config.js'

export const signUp = async (req, res) => {
  const {username, email, password, roles} = req.body

  const userFound = User.find({email})
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  })

  // Asignación de roles a los usuarios
  if (roles) {
    const foundRoles = await Role.find({name: {$in: roles}}) // De todos los roles guardados en la BD el usuario me manda uno de estos lo devolveré
    newUser.roles = foundRoles.map(role => role._id) // Lo que voy a guardar son los id, no los nombres de los roles
  } else {
    // Si el usuario no me manda un rol le asigno el rol de user (usaría el id)
    const role = await Role.findOne({name: 'user'})
    newUser.roles = [role._id]
  }

  const savedUser = await newUser.save()

  console.log({savedUser})
  // Generando un token para el usuario para que la aplicación del frontend pueda obtener los datos y reutilizar el id para pedir cosas al backend
  // Con este pase (token) al frontend le voy a dar cosas desde el backend

  // Creando token
  const token = jwt.sign({id: savedUser._id}, config.SECRET, {
    expiresIn: 86400 // 24 horas
  })
  // console.log({newUser})
  res.status(200).json({token})
}
export const signIn = async (req, res) => {
  res.json('signin')

}