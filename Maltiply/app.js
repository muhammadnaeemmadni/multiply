let mat1 = [ [0,0], [0,0]] 
let mat2 = [ [0,0] ,[0,0] ];
let result = [ [0,0] ,[0,0] ];

for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[i].length; j++) {
        console.log("i = ", i, "and j = ", j);
        mat1[i][j] = +prompt("getting matrix one data,Enter" + i + "," + j + ":")
    }
    
}
console.log(mat1);

for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2[i].length; j++) {
        console.log("i = ", i, "and j = ", j);
        mat2[i][j] = +prompt("getting matrix one data,Enter" + i + "," + j + ":")
    }
    
}
console.log(mat2);

for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
        console.log("i = ", i, "and j = ", j);
    //    result[i][j] = mat1[i][j] + mat2[i][j]
    // result[i][j] = mat1[i][0][0]*mat2[j][0][0] * mat1[i][0][1]*mat2[j][1][0] + 
    //                mat1[i[0][0]]*mat2[j][0][1] * mat1[i][0][1]*mat2[j][1][1]

    result[i][j] = mat1[i][i - i] * mat2[i - i][j] + mat1[i][i - i + 1] * mat2[i - i + 1][j];
 
    }
    
}
console.log( "sum of mat1 and mat2" , result)


document.getElementById("mat1").innerHTML= mat1
document.getElementById("mat2").innerHTML= mat2
document.getElementById("result").innerHTML= result