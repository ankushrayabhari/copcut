import Promise from 'bluebird'
import express from 'express'
import expressHandlebars from 'express-handlebars'
import cookieParser from 'cookie-parser' 
import bodyParser from 'body-parser'
import passport from 'passport'
import configurePassport from './server/config/passport-config'
import validator from 'express-validator'
import session from 'express-session' 
import path from 'path'
import Database from './server/models/database'
import APIRouter from './server/routes/apirouter'

import React from 'react'
import { match, RouterContext, createRoutes } from 'react-router'
import { renderToString } from 'react-dom/server'
import DataProvider from './app/dataprovider'
import AppRouter from './app/router'
const routes = createRoutes(AppRouter());

Database.connect();
//run this only first time app is run. comment everything else after this out
/*
Database.initialize().then(() => {
	 console.log("database initialized");
	 process.exit(0);
});
*/

const app = express();
app.use(express.static(__dirname+'/static'));

//Rendering Engine
const handlebars = expressHandlebars.create({extname: '.handlebars'});
app.set('views', __dirname+'/app/');
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


//parse cookies, json
app.use(cookieParser());
app.use(bodyParser.json());

//validator middleware for forms
app.use(validator());

//Express Session for logins
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { 
		secure: false,
		httpOnly: true
	}
}));

//Configure Strategies and initialize passport/session
configurePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

// REST API
app.use('/api', APIRouter);

//Wildcard Route for React SPA
app.get('*', function (req, res) {
	match({ routes: routes, location: req.url }, (err, redirect, props) => {
		if (err) {
      		res.status(500).send(error.message)
    	} 
    	else if (redirect) {
      		res.redirect(302, redirect.pathname + redirect.search)
    	} 
    	else if (props) {
    		let authenticated, user;
			if(req.user) {
				authenticated = true;
				user = req.user;
			}
			else {
				authenticated = false;
				user = null;
			}

			const data = {
				authenticated,
				user
			};

			const html = renderToString(<DataProvider {...props} data={data}/>)			
			
			res.render('application', {
				layout: false,
				content: html,
				authenticated,
				user
			});
		}
		else {
      		res.status(404).send('Not found')
    	}
	});
});

app.listen(process.env.PORT || 3000);