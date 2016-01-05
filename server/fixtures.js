

if(ServiceTypes.find().count() == 0){
	
	ServiceTypes.insert({
		name : 'Translado',
		time : 60
	});

	ServiceTypes.insert({
		name : 'Salida',
		time : 60
	});

	ServiceTypes.insert({
		name : 'Transporte de Muestras',
		time : 60
	});

	ServiceTypes.insert({
		name : 'Mensajería Administrativa',
		time : 60
	});

	ServiceTypes.insert({
		name : 'Otros',
		time : 60
	});

}
