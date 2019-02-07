import { MongoClient } from 'mongodb';
import assert from 'assert';

class Mongodb {
  
  constructor() {
    this.client = new MongoClient('mongodb://mongo:27017');
    this.client.connect((err, client) => {
      assert.equal(null, err);
      console.log('Connected correctly to mongodb');
      this.db = client.db('slurpee-flavours');
    });
  }

  getStores() {
    return this.db.collection('stores').find().toArray();
  }

}

export default Mongodb;