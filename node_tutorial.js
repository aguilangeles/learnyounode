//console.log((+process.argv[2])+(+process.argv[3]))
/*var result = 0  
     for (var i = 2; i < process.argv.length; i++)  
       result += Number(process.argv[i])  
     console.log(result)  */
 /*==========leccion 3=============*/
/*var fs =require('fs')
var result=fs.readFileSync('/home/mariaa/proyectos/node/sum.txt').toString();

var bf = new Buffer(result);
var lines= bf.toString().length-1;
console.log(lines);*/
var fs =require('fs');

fs.readFile('/home/mariaa/proyectos/node/sum.txt', 'utf-8')

	
/*	var fs =require('fs');

fs.readFile('/home/mariaa/proyectos/node/sum.txt', function (err, data) {
  if (err) throw err;
  console.log(data.toString);
});*/
