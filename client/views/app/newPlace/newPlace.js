Template.newPlace.rendered = function(){

};

Template.newPlace.helpers({

	getAllAreas : function(){
		return Areas.find();
	}

});


Template.newPlace.events({


	'submit #formPlace' : function(e){
		e.preventDefault();

		var json = {
			name : $('input[name="name"]').val(),
			description : $('textarea[name="description"]').val(),
			area : $("#selectArea option:selected" ).text() ,
			floor : $('input[name="floor"]').val(),
			nfc : $('input[name="nfc"]').val(),
		};

		Meteor.call('createPlace', json, function(error, result){
				if(error){
					alert('Error creando punto de chequeo');
				}

				if(result){
					Router.go('places');	
				}
		});

	},

	'click #btnCancel' : function(e){
		e.preventDefault();
		Router.go('places');
	}

});