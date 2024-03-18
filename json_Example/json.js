const myarray = [];
const myobject = {};

for (let i=0; i<10; i++){
    myarray.push(i);
}
myobject.first="test";
myobject.last="exam";
myobject.toString = () =>{
    return "Hello World!"
};
myobject.arr= myarray

const mystring = '{"first":"test","last":"exam","arr":[0,1,2,3,4,5,6,7,8,9]}';
const newobj = JSON.parse(JSON.stringify(myobject));



$('#ma').val(myarray);
$('#mo').val(JSON.stringify(myobject));
$('#no').val(JSON.stringify(newobj));
console.log(myarray);
console.log(JSON.stringify(myarray));
console.log(myobject);
console.log(JSON.stringify(myobject));
console.log(newobj);
console.log(JSON.stringify(newobj));