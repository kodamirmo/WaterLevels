Template.history.helpers({

    settings: function () {
        return {
            collection: "insecure-items",
            rowsPerPage: 10,
            showFilter: false,
            fields: [
    			{ key: 'date', 
    			  label: 'Date',
    			  fn : function(val){
    			  	return moment(val).format('MM/DD/YY HH:mm:ss');
    			  } 
    			},
    			{ key: 'device', 
    			  label: 'Device',
    			  fn : function(val){
    			  	var name = 'Device'
    			  	try{
    			  		name = Devices.findOne({_id:val}).name;
    			  	}catch(err){}
    			  	return name;
    			  } 
    			},
    			{ key: 'level', 
    			  label: 'Level',
    			},
    			{ key: 'automatic', 
    			  label: 'Automatic',
    			}
			] 
			
        };
    }
});

