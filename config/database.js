const mongoose = require('mongoose');
// shortcut to mongoose.connection 

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/customers', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
