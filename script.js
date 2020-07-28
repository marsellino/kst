//import node.js file system module
var fs = require('fs');
//get all the data from the .txt file
fs.readFile('unsorted-names-list.txt', function(err, nama) {
    // convert all the data from the files into string and add 1 space down
    var nama = nama.toString().split("\n");
    //put the "string" data to the array
    for(i in nama) {
    	//sort the array
    	nama.sort();
        console.log(nama[i]);
    }
    //create new file, from the sorted name array
    fs.writeFile('sorted-names-list.txt',  nama, function(err){
	console.log();
	});
});

