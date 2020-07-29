//import node.js file system module
var fs = require('fs');
//get all the data from the .txt file
fs.readFile('unsorted-names-list.txt', function(err, nama) {
    // convert all the data from the files into string
    var nama = nama.toString().split("\n");
    //put the "string" data to the array
    var a = [nama];
    	//sort the array
    	a.sort().join("\n");
    	//put the sorted vallue into array a
    	a = nama.sort().join("\n");
        console.log(a);
    
    //create new file, from the sorted array
    fs.writeFile('sorted-names-list.txt', a, function(err){
	console.log();
	});
});

