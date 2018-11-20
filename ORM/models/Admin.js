const Sequelize = require('sequelize');
module.exports = (sequelize)=>{
	return sequelize.define('admin',{
		firstName:{
			type:Sequelize.STRING
		},
		lastName:{type:Sequelize.STRING},
		username:{type:Sequelize.STRING},
		password:{type:Sequelize.STRING}

	});
}