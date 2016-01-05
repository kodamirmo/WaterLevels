

if(Devices.find().count() == 0){
	
	var now = (new Date()).getTime();

	Devices.insert({

		name : 'Device 1',
		lastValue : {
			date : now,
			level : 80
		},
		maxValue : 100,
		description: '',
		place : ''

	});

	Devices.insert({

		name : 'Device 2',
		lastValue : {
			date : now,
			level : 71
		},
		maxValue : 100,
		description: '',
		place : ''
		
	});

	Devices.insert({

		name : 'Device 3',
		lastValue : {
			date : now,
			level : 28
		},
		maxValue : 100,
		description: '',
		place : ''
		
	});

	Devices.insert({

		name : 'Device 4',
		lastValue : {
			date : now,
			level : 91
		},
		maxValue : 100,
		description: '',
		place : ''
		
	});

}


if(Values.find().count() == 0){


	var d1 = moment(new Date(1420092000000));
	var current = moment(d1);
	var d2 = moment(new Date(1451887200000));

	var getRandomInt = function getRandomInt(min, max) {
   		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var devices = Devices.find().fetch();
	var ids = _.pluck(devices,'_id');

	var insertDay = function insertDay(current) {
		
		var f1 = moment(current).hour(2);
		var f2 = moment(current).hour(7);
		var f3 = moment(current).hour(12);
		var f4 = moment(current).hour(17);
		var f5 = moment(current).hour(23);

		var ffs = [f1,f2,f3,f4,f5];

		_.each(ids, function(id){

			_.each(ffs, function(date){

				var entry = {
					date : date.valueOf(),
					level : getRandomInt(6,100),
					automatic : true,
					device : id
				};

				Values.insert(entry);

			});

		});

	};

	while(current <= d2){

		insertDay(current);
		current = current.add(1, 'days');

	}


}


