window.onload = function(){
	var mul_input1 = document.getElementById("mul-input1");
	var mul_input2 = document.getElementById("mul-input2");
	var mul_input3 = document.getElementById("mul-input3");
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var btn3 = document.getElementById("btn3");
	var str_input1 = document.getElementById("str-input1");
	var str_input2 = document.getElementById("str-input2");
	var cal_input1 = document.getElementById("cal-input1");
	var cal_input2 = document.getElementById("cal-input2");
	var cal_input3 = document.getElementById("cal-input3");
	var cal_input4 = document.getElementById("cal-input4");
	
	btn1.onclick = function(){
		mul_input3.value = mul_input1.value * mul_input2.value ;
	}
	
	btn2.onclick = function(){
		function str(a){
				if(a != 1){
				a = a*str(a-1);
			}else{
				return 1 ;
			}
			return a ;
		}
		str_input2.value = str_input1.value + "的阶层为" + str(str_input1.value) ;
	}
	
	btn3.onclick = function(){
		if( cal_input2.value == "+" ){
			cal_input4.value = parseFloat(cal_input1.value) + parseFloat(cal_input3.value) ;
		}else if( cal_input2.value == "-" ){
			cal_input4.value = cal_input1.value - cal_input3.value ;
		}else if( cal_input2.value == "*" ){
			cal_input4.value = cal_input1.value * cal_input3.value ;
		}else if( cal_input2.value == "/" ){
			cal_input4.value = cal_input1.value / cal_input3.value ;
		}
	}
	
	
}