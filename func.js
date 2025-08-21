const fdk=require('@fnproject/fdk');
const request = require('request');
fdk.handle(function(input, ctx){
	let reqBody;
	let reqResponse;
	let reqError;
	console.log("Call REST");
	request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
		reqBody 	= body;
		reqResponse	= response;
		reqError	= error;
	});
	return {"body": 	reqBody,
			"response":	reqResponse,
			"error":	reqError};
})
