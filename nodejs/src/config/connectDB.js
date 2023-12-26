const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log(process.env.DATABASE_URL);
		console.log('Connect Successfully!!!');
	} catch (error) {
		console.log(error);
		console.log(process.env.DATABASE_URL);
		console.log('Connect Failure!!!')
	}
}

module.exports = { connect };