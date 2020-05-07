window.onload = function(){
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var secouds = document.getElementById("secouds");
	var begin = document.getElementById("begin");
	var end = document.getElementById("end");
	
	var timer ;
	begin.onclick = function(){
		var h = 0 ;
		var m = 0 ;
		var s = 0 ;
		timer = setInterval(function(){
			
			s++;
			if(s == 60)
			{
				s = 0 ;
				m += 1 ;
			}
			else if(m == 60)
			{
				m = 0 ;
				h += 1 ;
			}
			
			hours.innerHTML = h ;
			minutes.innerHTML = m ;
			secouds.innerHTML = s ;
		},1000)
	}
	
	end.onclick = function(){
		clearInterval(timer);
	}
	
	
	var year = document.getElementById("year");
	var month = document.getElementById("month");
	var day = document.getElementById("day");
	var hour = document.getElementById("hour");
	var minute = document.getElementById("minute");
	var secoud = document.getElementById("secoud");
	
	setInterval(function(){
		var d = new Date();
		year.innerHTML = d.getFullYear();
		month.innerHTML = d.getMonth();
		day.innerHTML = d.getDate();
		hour.innerHTML = d.getHours();
		minute.innerHTML = d.getMinutes();
		secoud.innerHTML = d.getSeconds();
	},1000)
	
	var box1 = document.getElementById("box1");
	var p1 = document.getElementById("p1");
	var i = 0;
	var timer2 = setInterval(function(){
		i+=2;
		if (i==200) {
			clearInterval(timer2);
		}
		box1.style.width = i+"px";
		p1.innerHTML = i/2+"%";
	},50)
	
	var mycolor = document.getElementById("mycolor");
	var changecolor = document.getElementById("changecolor");
	var colorarr = ["red", "blue", "yellow", "green", "black", "orange"];
	
	changecolor.onclick = function(){
		var i = 0 ;
		setInterval(function(){
			
			i++;
			if( i == 7 ){
				i = 0;
			}
			mycolor.style.background = colorarr[i];
		},1000)
	}
}