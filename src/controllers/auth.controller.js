const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = {};

exports.registerEndpoint = async (req, res) =>{
    const {email, password} = req.body;

    const hashed = await bcrypt.hash(password, 12);
    users[email] = hashed;

    console.log(users);
    res.send('Registered...')
}

exports.loginEndpoint = async (req, res) =>{

    const {email, password} = req.body;
    
    if(!users[email]) return res.status(401).send('invalid credentials!');
    
    const valid = await bcrypt.compare(password, users[email])
    if(!valid) return res.status(401).send('invalid credentials!');

    const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: "15m"});

    res.json({token});

}