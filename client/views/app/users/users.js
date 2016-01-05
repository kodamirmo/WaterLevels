Template.camilleros.rendered = function(){

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })

};


Template.camilleros.events({

	'click #btnNewCamillero' : function(e){
		e.preventDefault();
		Router.go('newUser');
	}

});


Template.camilleros.helpers({

	getAllUsers : function(){
		return Meteor.users.find();
	}

});