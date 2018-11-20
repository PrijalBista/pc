const Sequelize = require('sequelize');
module.exports = (sequelize)=>{
	return sequelize.define('user',{
		uid:{
			type:Sequelize.INTEGER,
			primaryKey:true,
			autoIncrement:true
		},
		username:Sequelize.STRING,
		password:Sequelize.STRING,
		email:Sequelize.STRING,
		fname:Sequelize.STRING,
		lname:Sequelize.STRING,
		address:Sequelize.STRING,
		profilePic:Sequelize.STRING,
		joined:Sequelize.DATE,
		status:Sequelize.BOOLEAN
	});
}