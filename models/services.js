Services = new Meteor.Collection('services');

/*

{
	
	user : '',      -------> ID to Meteor user
	serviceType : 'id'   ---->   ID To object ServiceType
	schedule    : 'id'   ---->   ID To object Schedule
	patient     : {
		name    : '',
		cedule  : '',
		history : '',
	},
	defined : true,
	route : {
		origin : 'id'    ---->  ID To object Place,
		destionation : 'id' ---->  ID To object Place,
		path : ''      
	},
	generateTime : 783642785,
	startTime : 4567890,
	finishTime : 6758760,
	status :  ''        ---------->    0 = Asignado
									   1 = Aceptado
									   2 = Cancelado	 
									   3 = En progreso
									   4 = Stand by
									   5 = Terminado
									   
	lastCheckTime : '',
	walkStatus : []     ---------->    {place:'id', checked: boolean, time: 'date'}
	notes : []          ---------->    ID to Notes
	
}

*/