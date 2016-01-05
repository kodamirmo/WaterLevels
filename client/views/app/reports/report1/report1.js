function getData(){
    
    return {

        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Values trend by device'
        },
        credits: {
            enabled: false
        },
        subtitle: {
            text: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        yAxis: {
            title: {
                text: 'Compliance (%)'
            },
            min: 0,
            max: 100
        },
        tooltip: {
            enabled: true,
            dateTimeLabelFormats : {
                millisecond:"%A, %b %e, %H:%M"
            }
        }

    };
};

Template.report1.rendered = function(){

    Highcharts.setOptions({
        global: {
            useUTC: false
        }   
    });

    $('#startTime').datetimepicker({
        timepicker:false,
        format: 'MM/DD/YYYY'
    });
    $('#endTime').datetimepicker({
        timepicker:false,
        format: 'MM/DD/YYYY'
    });

    
}

Template.report1.helpers({

    devices : function(){
        return Devices.find();
    }

});


Template.report1.events({

    'click #view' : function(e){
        e.preventDefault();


        var startDate = $('#startTime').val();
        var finishDate = $('#endTime').val();

        if(startDate == '' || finishDate == ''){
            alert('Invalid dates');
            return;
        }

        var deviceId = $('#dropDevice').val();

        if(deviceId == ''){
            alert('Invalid device');
            return;   
        }

        startDate = moment(new Date(startDate));
        finishDate = moment(new Date(finishDate));

        startDate = startDate.hour(0);
        startDate = startDate.minute(0);

        finishDate = finishDate.hour(23);
        finishDate = finishDate.minute(59);

        startDate = startDate.valueOf();
        finishDate = finishDate.valueOf();

        var dataToServer = {
            startDate : startDate,
            finishDate : finishDate,
            device : deviceId
        };


        Meteor.call('generateChart1', dataToServer,function(err, result){

            if(err){
                alert('An error generating report');
            }else{
                console.log(result)
                var data = {};
                data.data = _.extend(getData(), result);
                data.startDate = startDate;
                data.finishDate = finishDate;
                $('#chartContainer').highcharts(data.data);
            }

        });

    }   

});
