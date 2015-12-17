const azure = require('azure');

var serviceBusService = azure.createServiceBusService(
    'Endpoint=sb://nodeasb-ns.servicebus.windows.net/;SharedAccessKeyName=Admin;SharedAccessKey=6nEULsQ0Hsa5SzcFnEZutexg53fiI2d6H1PUMac8jw4='
    );
serviceBusService.createQueueIfNotExists('nodeasb', function(error){
    if(!error){
        // Queue exists
        console.log('Queue created sucessfully!');
    }
    else {
        console.log(error);
    }
});


var message = {
    body: 'Test message',
    customProperties: {
        testproperty: 'TestValue'
    }};
serviceBusService.sendQueueMessage('nodeasb', message, function(error){
    if(!error){
        // message sent
        console.log('message setnt sucessfully');
    }
    else {
        console.log(error);
    }
});


serviceBusService.receiveQueueMessage('nodeasb', function(error, receivedMessage){
    if(!error){
        // Message received and deleted
        console.log(receivedMessage);
    }
});

//Endpoint=sb://nodeasb-ns.servicebus.windows.net/;SharedAccessKeyName=Admin;SharedAccessKey=6nEULsQ0Hsa5SzcFnEZutexg53fiI2d6H1PUMac8jw4=