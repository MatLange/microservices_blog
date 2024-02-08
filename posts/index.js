const express = require( 'express' );
const bodyParser = require( 'body-parser');
const cors = require( 'cors' );

const app = express();
app.use( bodyParser.json());
app.use( cors() );

const { randomBytes } = require( 'crypto' );
const router = express.Router();

const posts = {};

app.get( '/posts', ( req, res ) => {
    res.send( posts );
} );

app.post( '/posts', ( req, res ) => {
    const id = randomBytes( 4 ).toString( 'hex' );  
    const { title } = req.body;
    posts[ id ] = { id, title };
    res.status( 201 ).send( posts[ id ] );
} );

app.put( '/posts/:id', ( req, res ) => {} );

app.delete( '/posts/:id', ( req, res ) => {} );

app.listen( 4000, () => {
    console.log( 'Listening on port 4000' );            
} );