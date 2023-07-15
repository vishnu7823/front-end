//arrays

let num=10
let name="vishnu"

let cities=[ "chennai","madurai","namakkal"];
 
let marks=[78,90,99];
console.log(marks.length)

console.log(cities[2])
console.log(cities)
//last elemnt
console.log(marks[marks.length-1])

//mix of int strings

let arr=[5,7,8,"vishnu",[3,4]]

console.log(arr)
console.log(arr[4][1])

//2d array

let matrix=[[1,2,3],[5,6,7],[9,8,0]]
console.log(matrix[1][2])

//arr methods
let array=["a",'b','c','d','e']

//push-add elements to the end
array.push('f')
console.log(array)


//pop-remove elements from the end and returns removed value

console.log(array.pop())
console.log(array)

//shift-remove element from start of the array
//returns removed value

console.log(array.shift())
console.log(array)

//unshift -adds elements to the start of the array
//return new lengths

console.log(array.unshift('a'))
console.log(array)

//delete
delete array[2]
console.log(array)
console.log(array[2])

//splice-delete

array.splice(2,2)
console.log(array)

//splice-replace

array.splice(1,1,'m')
console.log(array)

array.splice(1,2,'s','h')
console.log(array)

array.splice(1,0,'b')
console.log(array)


//slice method
//slice(start index,ending index)
//ending index not included

console.log(array.slice(3,-1))

//revrese
array.reverse()
console.log(array)

//join-converts array to string

let str = array.join()
console.log(str)

//split-converts striong into array

let str2="g,t,r,e"
str2.split(',')
let arr1=str2.split(',')
console.log(arr1)

// concat and spread operator
let firstarr=[1,2,3]
let secondarr=[4,5,6]

let joinedarr=[firstarr,secondarr]
joinedarr=firstarr.concat(secondarr)
console.log(joinedarr)

//spread....
let joined=[...firstarr,...secondarr]
console.log(joined)


let arr3=[5,8,10,7,9,11];
let len=arr3.length;
console.log(arr3)
arr3.splice(3,5,'17','19','111')
console.log(arr3)

console.log(arr3.unshift('100'))
console.log(arr3)

arr3.push('1000')
console.log(arr3)


