var ratakiri = ''
var i, j
for(i = 1; i <=5; i++) { // menentukan banyak baris
    for(j = 0; j < i; j++) { // menentukan banyaknya bintang setiap baris
    ratakiri += '*'
}

ratakiri += '\n'
}

console.log(ratakiri)


var persegi = ''
var i, j
for (i =1; i<=3; i++) {
    for(j=1; j<=3; j++){
        persegi += '*'
    }

    persegi += '\n'    

}

console.log(persegi)


var ratakanan = ''
var i, j
for (var i=1;i<=5;i++){
    for (var j=i;j<=5;j++){
        ratakanan += ' '
    }
    for (var k=1;k<=i;k++){
        ratakanan += '*'
    }{
        ratakanan += '\n'    
    }
 }

 console.log(ratakanan)


