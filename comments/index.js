const express = require( 'express' );
const bodyParser = require( 'body-parser');
const cors = require( 'cors' );
const axios = require( 'axios');

const app = express();
app.use( bodyParser.json());
app.use( cors() );

const { randomBytes } = require( 'crypto' );
const router = express.Router();

const commentsByPostId = {};    

app.get( '/posts/:id/comments', ( req, res ) => {
    res.send( commentsByPostId[req.params.id] || [] );
} );

app.post( '/posts/:id/comments', async ( req, res ) => {
    const commentId = randomBytes( 4 ).toString( 'hex' );  
    const { content } = req.body;
    comments = commentsByPostId[req.params.id] || [];
    comments.push({ id:commentId, content });    
    commentsByPostId[req.params.id] = comments;

    await axios.post( 'http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id
        }
    } ).catch((err) => {
        console.log(err.message);
      });
    
    res.status( 201 ).send( comments);
} );

app.post( '/events', ( req, res ) => {
    console.log( 'Received Event', req.body.type );
    res.send({});
});

app.put( '/comments/:id', ( req, res ) => {} );

app.delete( '/comments/:id', ( req, res ) => {} );

app.listen( 4001, () => {
    console.log( 'Listening on port 4001' );            
} );