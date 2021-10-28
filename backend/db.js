const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/blockchain-ecommerce',
  // 'mongodb://test-mongo-user:mongopassword@mongo-cluster.o0w0t.mongodb.net/myFirstDatabase',
  {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
  id: String,
  itemId: String,
  paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
  Payment
}