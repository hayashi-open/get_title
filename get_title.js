var request = require('request');

var URL = process.argv[2];
if(!URL){
  console.log("node get_title.js {URL}");
  process.exit(1);
}

var re_title = RegExp("(?<=<title.*>).*(?=</title>)");

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var title = re_title.exec(body);
    if(!title){
      console.log("No title")
    }else{
      console.log(title[0]);
    }
  }else{
    console.log("Error!");
  }
}

request(URL, callback);
