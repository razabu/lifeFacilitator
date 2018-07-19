var db = require('mongoose')
db.connect('mongodb://localhost:27017/test')

module.exports = db