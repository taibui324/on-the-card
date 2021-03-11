const { AuthenticationError } = require ('apollo-server');

const jet = require('jsonwebtoken');

const { SECRET_KEY} = require('../config/');

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    // context.. (...headers )
    if(authHeader){
        const token = authHeader.split('Bearer ')[1];
        if(token){
            try {
                const user = jwt.verify(toke, SECRET_KEY);
                return user;
            }catch(err){
            throw new AuthenticationError('Invalid');
            }
        }
        throw new Error("Authentication token must be inserter [tokens]");
    }
    throw new Error('Authorization header must be provided');
  };
 