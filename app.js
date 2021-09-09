// Instantiating new EasyHTTP class
const http = new EasyHTTP;
// User Data
var data = {"id":2,"value":"test for worng now"};

// Update Post
http.put(
'http://localhost:8088/api/clients/wks-96445-mac.ad.tuni.fi/30602/0/2',
	data)

// Resolving promise for response data
.then(data => console.log(data))

// Resolving promise for error
.catch(err => console.log(err));
