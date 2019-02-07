import express from 'express';
import Mongodb from './mongodb';

const port = 3001;
const app = express();
const db = new Mongodb();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/stores', (req, res) => {
  res.header()
  db.getStores().then(stores => {
    res.send(stores);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));