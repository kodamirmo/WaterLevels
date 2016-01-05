Template.devices.helpers({
	
	allDevices : function(){
		return Devices.find();
	}

});

Template.device.helpers({
	
	dateLabel : function(date){
		return moment(date).format('MM/DD/YY HH:mm:ss');
	},

	percentValue : function(value, max){
		var val = 0;
		try{
			val = (value * 100) / max;
		}catch(err){

		}
		return 100 - val;
	}

});


Template.device.events({

	'click .btnRequest' :  function(e){
		var deviceId = $(e.target).closest('.btnRequest').data('id');
		Meteor.call('requestValue', deviceId);
	}

});