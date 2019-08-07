import jwt from 'jsonwebtoken';

const { APP_SECRET } = process.env;
const generateToken = (payload, expiresIn) => jwt.sign(payload, APP_SECRET, { expiresIn });

export default generateToken;
