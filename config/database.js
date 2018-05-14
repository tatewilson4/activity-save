module.exports = {
  database: process.env.MONGODB_URI || 'mongodb://localhost:27017/meanauth',
  secret: 'my-secret-phrase'
}
