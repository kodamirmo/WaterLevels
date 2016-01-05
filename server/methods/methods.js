Meteor.methods({
	
	createPlace : function(json){
		Places.insert(json);
		return true;
	},

	createCamillero : function(json){

		var profile = {
			area : json.area,
			name : json.name,
			workshift : json.workshift,
			image : '',
			status : 3
		};

		var user = {
			email : json.email,
			password : json.password,
			profile  : profile
		};

		Accounts.createUser(user);
		return true;
	},

	createSchedule : function(json){
		Schedules.insert(json);
		return true;
	},

	createArea : function(json){
		Areas.insert(json);
		return true;
	},

	createPath : function(json){
		Paths.insert(json);
		return true;
	},

	createService : function(json){	
		
		var user = Meteor.users.findOne({_id:json.user});
		var type = ServiceTypes.findOne({_id:json.serviceType});

		json.schedule = user.profile.workshift;
		json.generateTime = (new Date()).getTime();
		json.startTime = 0;
		json.finishTime = 0;
		json.status = 0;
		json.lastCheckTime = 0;

		/*
		if(json.defined){

			var places = Paths.findOne({_id:json.route.path});
			
			var status = [];
			_.each(places.places, function(id){
				status.push({place:id,checked:false});
			});
			
			json.walkStatus = status;

		}else{
			json.walkStatus = [];
		}
		*/

		json.walkStatus = [];

		json.notes = [];
		console.log(json);

		Services.insert(json);
		return true;
	}
	
});
