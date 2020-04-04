if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const config = {
    databaseURL: process.env.DATABASE,
    //mail: process.env.MAIL,
    Stripe_Public_Key: process.env.Stripe_Public_Key,
    Stripe_Secret_Key: process.env.Stripe_Secret_Key
};


//tredjepartsystem stripe api, klarna, paypal

//api nyckel

//aktivera konto


module.exports = config;