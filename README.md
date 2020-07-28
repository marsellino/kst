# kst
From the problem there, im using node js to solve the problem, using node.js file system module to manipulate files.
so in the top of the code, i got to import these module var fs = require('fs');
then use fs.readFile() to get the data from "unsorted-names-list.txt"
and for last step, using fs.writeFile to create new "sorted-names-list.txt" file

this is what im doint t solve the problem

step 1. read all the data from "unsorted-names-list.txt"
step 2. change the content inside "unsorted-names-list.txt" to strings and add 1 space down
step 3. then put the strings into array
step 4. sort the array
step 5. put the the sorted array into new file named "sorted-names-list.txt"  (create new file)
