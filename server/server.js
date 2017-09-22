require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0');

const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {app.set('db', db);
}).catch(err => console.log(fail));

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK},
    function(accessToken, refreshToken, extraParams, profile, done) {
            
        done(null, profile)
}))

passport.serializeUser(function(user, done) {
    done(null, user);
})

passport.deserializeUser( function(user, done) {
    done(null, user);
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0',{
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/auth'
}));

const PORT = 3535;
app.listen(PORT, () => console.log(`listening on port:`, PORT));