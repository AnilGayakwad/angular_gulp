
angular.module('myApp.services', []).factory('itemService', function(){
	
	var itemSer = {};
	 
	itemSer.itemCollection = [ 
									{ 'buildNo':'Tenrox-R1_1235',
									  'type' : 'build',
									  'owner': '',
									  'timeStamp': '',
									  'state': 'pending',
									  'metrics': { 
									  				'status': 'pending',
									  			   	'test':'0',
									  			   	'maintainablity':'0',
									  			   	'security':'0',
									  			   	'workmanship':'0'
									  			 },
 									  'build': { 
 									  				'status': 'pending',
 									  			 	'timeStarted' : '4/18/2014 12:12pm'
 												},
									  'unitTest': {
									  				'status': 'pending',
									  				'failedTest': 15,
									  				'passedTest': 20
									  			},
									  'functionalTest': {
									  				'status': 'pending',
									  				'failedTest': 45,
									  				'passedTest': 16
									  			}
									},
									{ 'buildNo':'432462',
									  'type' : 'firewall',
									  'owner': 'jtuck',
									  'timeStamp': '4/18/2014 12:12pm',
									  'state': 'running',
									  'metrics': { 
									  				'status': 'running',
									  			   	'test':'0',
									  			   	'maintainablity':'0',
									  			   	'security':'0',
									  			   	'workmanship':'0'
									  			 },
 									  'build': { 
 									  				'status': 'pending',
 									  			 	'timeStarted' : '4/18/2014 12:12pm'
 												},
									  'unitTest': {
									  				'status': 'pending',
									  				'failedTest': 12,
									  				'passedTest': 60
									  			},
									  'functionalTest': {
									  				'status': 'pending',
									  				'failedTest': 33,
									  				'passedTest': 16
									  			}
									},
									{ 'buildNo':'432461',
									  'type' : 'firewall',
									  'owner': 'samy',
									  'timeStamp': '4/18/2014 10:53pm',
									  'state': 'rejected',
									  'metrics': { 
									  				'status': 'completed',
									  			   	'test':'0',
									  			   	'maintainablity':'0',
									  			   	'security':'0',
									  			   	'workmanship':'0'
									  			 },
 									  'build': { 
 									  				'status': 'completed',
 									  			 	'timeStarted' : '4/18/2014 12:12pm'
 												},
									  'unitTest': {
									  				'status': 'completed',
									  				'failedTest': 0,
									  				'passedTest': 76
									  			},
									  'functionalTest': {
									  				'status': 'completed',
									  				'failedTest': 65,
									  				'passedTest': 3
									  			} 
									},
									{ 'buildNo':'Tenrox-R1_1234',
									  'type' : 'build',
									  'owner': '',
									  'timeStamp': '4/18/2014 9:42am',
									  'state': 'completed',
									  'metrics': { 
									  				'status': 'completed',
									  			   	'test':'0',
									  			   	'maintainablity':'0',
									  			   	'security':'0',
									  			   	'workmanship':'0'
									  			 },
 									  'build': { 
 									  				'status': 'completed',
 									  			 	'timeStarted' : '4/18/2014 12:12pm'
 												},
									  'unitTest': {
									  				'status': 'completed',
									  				'failedTest': 20,
									  				'passedTest': 25
									  			},
									  'functionalTest': {
									  				'status': 'completed',
									  				'failedTest': 16,
									  				'passedTest': 71
									  			} 
									},
									{ 'buildNo':'432460',
									  'type' : 'firewall',
									  'owner': 'samy',
									  'timeStamp': '4/18/2014 7:51am',
									  'state': 'rejected',
									  'metrics': { 
									  				'status': 'completed',
									  			   	'test':'0',
									  			   	'maintainablity':'0',
									  			   	'security':'0',
									  			   	'workmanship':'0'
									  			 },
 									  'build': { 
 									  				'status': 'pending',
 									  			 	'timeStarted' : '4/18/2014 12:12pm'
 												},
									  'unitTest': {
									  				'status': 'pending',
									  				'failedTest': 0,
									  				'passedTest': 0
									  			},
									  'functionalTest': {
									  				'status': 'pending',
									  				'failedTest': 21,
									  				'passedTest': 46
									  			} 
									},
									{ 'buildNo':'432459',
									  'type' : 'firewall',
									  'owner': 'samy',
									  'timeStamp': '4/18/2014 6:43am',
									  'state': 'accepted',
									  'metrics': { 
									  				'status': 'completed',
									  			   	'test':'0',
									  			   	'maintainablity':'0',
									  			   	'security':'0',
									  			   	'workmanship':'0'
									  			 },
 									  'build': { 
 									  				'status': 'completed',
 									  			 	'timeStarted' : '4/18/2014 12:12pm'
 												},
									  'unitTest': {
									  				'status': 'completed',
									  				'failedTest': 20,
									  				'passedTest': 20
									  			},
									  'functionalTest': {
									  				'status': 'completed',
									  				'failedTest': 21,
									  				'passedTest': 42
									  			} 
									}
								];

	itemSer.getItems = function() {
			return itemSer.itemCollection;
		};			

	itemSer.addItem = function(obj){
		itemSer.itemCollection.push(obj);
		return 'successfully';
	};			
	
	return itemSer;

});