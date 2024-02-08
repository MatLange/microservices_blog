const express = require( 'express' );
const bodyParser = require( 'body-parser');
const cors = require( 'cors' );

const app = express();
app.use( bodyParser.json());
app.use( cors() );

const { randomBytes } = require( 'crypto' );
const router = express.Router();

const commentsByPostId = {};    

app.get( '/posts/:id/comments', ( req, res ) => {
    res.send( commentsByPostId[req.params.id] || [] );
} );

app.post( '/posts/:id/comments', ( req, res ) => {
    const commentId = randomBytes( 4 ).toString( 'hex' );  
    const { content } = req.body;
    comments = commentsByPostId[req.params.id] || [];
    comments.push({ id:commentId, content });
    commentsByPostId[req.params.id] = comments;
    res.status( 201 ).send( comments);
} );

app.put( '/comments/:id', ( req, res ) => {} );

app.delete( '/comments/:id', ( req, res ) => {} );

app.listen( 4001, () => {
    console.log( 'Listening on port 4001' );            
} );