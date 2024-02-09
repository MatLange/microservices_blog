const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


const posts = {};
const comments = {};

app.get('/posts', (req, res) => {
  res.send(posts);
}
);

app.post('/events', (req, res) => {
    const {type, data} = req.body;
    console.log('Received Event', type);
    if (type === 'PostCreated') {
      const {id, title} = data;
      posts[id] = {id, title, comments: []};
      console.log(posts);
    }
    if (type === 'CommentCreated') {
      const {id, content, postId} = data;
      const post = posts[postId];
      post.comments.push({id, content});
    }

    console.log(posts);

    res.send({
      message: 'Hello from post'});
  }
  );
  

app.listen(4002, () => {
  console.log('Server listening on port 4002'); 
});