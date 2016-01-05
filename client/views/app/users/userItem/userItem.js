Template.userItem.helpers({
	
	getAreaLabel : function(area){
		return 'Area ' + area;
	},

	getStatus : function(status){
		switch(status){
			case 0:
				return 'Asignado';
			case 1:
				return 'En ruta';
			case 2:
				return 'Stand by';
			case 3:
				return 'Libre';
		}
		return 'N/D';
	}
	

});