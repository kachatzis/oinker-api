const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	first_name : String,
	last_name : String,
	phone : String,
	email : String,
	username : String,
	password : String,
	credit : Number,
	is_admin : Boolean,
	is_enabled : Boolean
})

module.exports = mongoose.model('User', userSchema)
