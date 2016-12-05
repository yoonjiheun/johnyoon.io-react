import express from 'express';
import http from 'http';

const app = express ();

app.use(express.static(__dirname + '../assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'assets/pages/page.html');
})

const server = http.createServer(app)
  .listen(8080, () => {
    console.log('server started on port 8080 successfully');
});
