var con = require('./connection');

var DBO = {
	executeUpdate: function(sql,val){
		return new Promise(function(resolve,reject){

			con.query(sql,val,function(err,result){
				if(err) reject(err);
				console.log("updated 1 record using connection with thread id"+con.threadId);
				resolve("Registration Successful");
			});
		});		
	},

	executeQuery:function(sql,val){
		return new Promise(function(resolve,reject){
			
			con.query(sql,val,function(err,result){
				if(err) reject(err);
				console.log("updated 1 record using connection with thread id"+con.threadId);
				//resolve(JSON.stringify(result));
				resolve(JSON.parse(JSON.stringify(result)));
			});
		});

	},

}

module.exports =DBO;