import express from 'express';
import http from 'http';

const app = express ();

app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/assets/page.html');
});

app.get('/resume', (req, res) => {
  res.sendFile(__dirname + '/assets/resume/resume.pdf');
});

const server = http.createServer(app)
  .listen(8080, () => {
    console.log(process.env.NODE_ENV);
    console.log('server started on port 8080 successfully');
});
