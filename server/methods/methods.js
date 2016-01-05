Meteor.methods({
	
	requestValue : function(idDevice){

		var getRandomInt = function getRandomInt(min, max) {
    		return Math.floor(Math.random() * (max - min + 1)) + min;
		};
		
		var device = Devices.findOne({_id:idDevice});
		var val = getRandomInt(6, device.maxValue);
		var now = (new Date()).getTime();

	
		var lastValue = {
			date : now,
			level : val
		};


		var entry = {
			date : now,
			level : val,
			automatic : false,
			device : idDevice
		};


		console.log(lastValue);

		Devices.update({_id:idDevice},{$set:{lastValue:lastValue}});
		Values.insert(entry);

	},

	generateChart1 : function(dataToServer){

		console.log(dataToServer);
		
		var histories = Values.find({device:dataToServer.device, date  : {
			$gte: dataToServer.startDate,
			$lt:  dataToServer.finishDate
		}}).fetch();
			
		var gembaData = [];

		_.each(histories, function(history){

			var data = [0,0];
			data[0] = history.date;
			data[1] = history.level;
			
			gembaData.push(data);

		});

		var d = Devices.findOne({_id:dataToServer.device});

		var json = {
			name : d.name,
			data : gembaData
		};

		//Sort  by date 
		gembaData = _.sortBy(gembaData,function(data){return data[0];})

		var series = [];
		series.push(json);		
	
		
		var toChart = {
			xAxis: {
            	type: 'datetime',
            	min: dataToServer.startDate,
     			max: dataToServer.finishDate,
            	title: {
                	text: 'Date'
            	}
        	},
			series : series
		};

		console.log(toChart);
		return toChart;

	},

})
