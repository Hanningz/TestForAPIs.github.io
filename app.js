// Instantiating new EasyHTTP class
const http = new EasyHTTP;
// User Data
const data = {"id":1,"resources":[{"id":1,"value":10},{"id":2,"value":"2021-09-09T14:13:27+03:00"}

// Update Post
http.put(
'http://localhost:8088/api/clients/wks-96445-mac.ad.tuni.fi/30601/',
	data)

// Resolving promise for response data
.then(data => console.log(data))

// Resolving promise for error
.catch(err => console.log(err));
