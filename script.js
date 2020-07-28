var fs = require('fs');

fs.readFile('unsorted-names-list.txt', function(err, nama) {
    if(err) throw err;
    var nama = nama.toString().split("\n");
    for(i in nama) {
    	nama.sort();
        console.log(nama[i]);
    }
    nama.sort();
    fs.writeFile('sorted-names-list.txt',  nama, function(err){
	if (err) return console.log(err);
	console.log();
	});
});

