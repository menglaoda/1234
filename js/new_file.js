var no1 = [3,2,4,5,8,6,3,9];
console.log("第一题的结果是："+no1.slice(3,6));

var no2 = [1,2,3,4,6,7,8];
no2.splice(4,0,5);
console.log("第二题的结果是："+no2);

var no3 = ["我","是","一","只","笨","鸟"];
no3.splice(4,0,"聪");
no3.splice(5,1,"明");
var a = no3.join("");
console.log("第三题的结果是："+a);

var no4 = [20,23,21,34,54,55,32];
no4.splice(4,2);
console.log("第四题的结果是："+no4);

var no5 = [2,3,4,56,67,98];
no5.push(63);
function compare(value1,value2){
	if( value1 < value2 ){
		return -1;
	}
	else if( value1 == value2 ){
		return 0;
	}else{
		return 1;
	}
}
var b = no5.sort(compare);
console.log("第五题的结果是："+b);
