import {db} from '../connect.js'
import bcrypt from 'bcryptjs'

export const register = (req, res)=>{
    const q = 'SELECT * FROM users WHERE username=?'

    db.query(q, [req.body.username], (err, data)=>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("user alredy exists");

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)
        const q = 'INSERT INTO users (`username`, `password`, `name`, `email`) VALUE(?)'

        const values = [req.body.username, hashedPassword, req.body.name, req.body.email]
        db.query(q, values, (err,data)=>{
            if(err) return res.status(500).json(err)
            return res.status(200).json('user has been created')
        })
    })    


    
}

export const login = (req, res)=>{
    
}

export const logout = (req, res)=>{
    
}