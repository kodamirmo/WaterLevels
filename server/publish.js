ReactiveTable.publish("insecure-items", Values);


Meteor.publish('devices', function(){
	return Devices.find();
})