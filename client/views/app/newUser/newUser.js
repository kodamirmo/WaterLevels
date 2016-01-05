Template.newUser.helpers({
	
	getAreas : function(){

		var array = [];
		for(var i=1; i<5;i++){
			var temp = {
				_id : i,
				name : 'Area ' + i
			};
			array.push(temp);
		}

		return array;
	},

	getTurnos : function(){
		return Schedules.find();
	}

});


Template.newUser.events({

	'submit #formUser' : function(e){
		e.preventDefault();

		var json = {
			area : $( "#area option:selected" ).val(),
			workshift : $( "#schedule option:selected" ).val(),
			name : $('input[name="name"]').val(),
			password : $('input[name="password"]').val(),
			email : $('input[name="email"]').val()
		};
		

		Meteor.call('createCamillero', json, function(error, result){
				if(error){
					alert('Error creando camillero');
				}

				if(result){
					Router.go('camilleros');	
				}
		});

	},


	'click #btnCancel' : function(e){
		e.preventDefault();

		Router.go('camilleros');
	}

});