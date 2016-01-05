Meteor.methods({

	endpointUsers : function(){

		var users = [];

		_.each(Meteor.users.find().fetch(), function(user){
			var temp = {
				id : user._id,
				name : user.profile.name,
				lastName : user.profile.lastName,
				number : user.profile.number,
				picture : user.profile.image || '',
				mobile : user.profile.mobile || '',
				email : user.emails[0].address
			};
			users.push(temp);
		});

		return users;
	},

	endpointLogin : function(json){

		var response = {};

		try {
    		if (ApiPassword.validate({email: json.number, password: json.password})) {
      			response.success = true;
      			response.message = 'Login success';

      			var usr = Meteor.users.findOne({emails:{$elemMatch:{address:json.number}}});
      			
      			var temp = {
					id : usr._id,
					area : usr.profile.area,
					name : usr.profile.name,
					workshift : usr.profile.workshift,
					image : usr.profile.image,
					status : usr.profile.status
				};

				response.user = temp;

    		} else {
      			response.success = false;
      			response.message = 'Wrong data';
    		}
  		} catch (exc) {
      		response.success = false;
      		response.message = 'User doesnt exist';
  		}

  		return response;
	},

	endpointServices : function(user){
		var query = {user : user, status : 0};
		var services =  Services.find(query).fetch();

		_.each(services, function(service){

			service.route.path = [];

			if(service.defined){

				var places = Paths.findOne({_id:service.route.path});
			
				var path = [];
				_.each(places.places, function(id){
					status.push(id);
				});

				service.route.path = path;

			}

		});

		return services;
	},

	endpointStatusService : function(json){

		var response = {};

		var query = {};
		query.status = json.status;

		if(json.status = 1){
			var now = new Date();
			query.startTime = now.getTime();
		}else if(json.status == 3){
			var now = new Date();
			query.finishTime = now.getTime();
		}

		try{

			Services.update({_id:json.service}, {$set:query});

		} catch (exc) {
      		response.success = false;
      		response.message = 'Error to update';
      		return response;
  		}

  		response.success = true;
      	response.message = 'Updated successfully';

      	return response;

	},

	endpointCheckin : function(json){

		var response = {};

		var toUpdate = {};
		toUpdate.place = json.place;
		toUpdate.checked = true;
		toUpdate.date = (new Date()).getTime();

		try{
			Services.update({_id:json.service}, {$push:{walkStatus:toUpdate}});
		} catch (exc) {
			response.success = false;
      		response.message = 'Error to update';
      		return response;
		}

		response.success = true;
      	response.message = 'Updated successfully';

		return response;
	},

	endpointNote : function(json){

		var response = {};

		var toUpdate = {};
		toUpdate.text = json.note;
		toUpdate.date = (new Date()).getTime();

		try{
			Services.update({_id:json.service}, {$push:{notes:toUpdate}});
		} catch (exc) {
			response.success = false;
      		response.message = 'Error to update';
      		return response;
		}

		response.success = true;
      	response.message = 'Updated successfully';

		return response;
	},


});