const Sequelize = require('sequelize');
const AdminModel = require('./models/Admin');
const UserModel = require('./models/User');

const sequelize = new Sequelize('mysql://root:@localhost:3306/pc');

sequelize.authenticate()
.then(()=>console.log("connection established successfully"))
.catch((err)=>console.log(err));


const Admin = AdminModel(sequelize);
const User = UserModel(sequelize);

sequelize.sync().then(()=>{
	console.log('Database & tables created !');
});


module.exports={
	User,
	Admin
}




//Admin.sync({force:true}).then(()=>{
// Admin.sync().then(()=>{
// 	console.log("admin table created");
// 	return Admin.create({
// 		firstName: 'Shree Krishna',
// 		lastName: 'Pandey',
// 		username: 'sk',
// 		password: 'pandey'
// 	});
// });

// User.sync({force:true}).then(()=>{
// 	console.log("admin table created");
// 	return User.create({
// 		fname: 'Shree Krishna',
// 		lname: 'Pandey',
// 		username: 'sk',
// 		password: 'pandey',
// 		email:'sk@sk.com',
// 		address:'kir',
// 	});
// });

