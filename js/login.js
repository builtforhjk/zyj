$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
		//修改密码请改此处
    if(userName=="张颖晶" &&  pwd=="19971203"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){
				location.href="BirthdayCake.html";
			},2000);
		}
	else{
		alert("Wrong Password");
	}
});

function clockRefresh(){
	var endTime = new Date("2020/12/7");
	var nowTime = new Date();
	var leftTime = endTime.getTime() - nowTime.getTime(),
	lefth = Math.floor(leftTime/(1000*60*60)%24),
	leftm = Math.floor(leftTime/(1000*60)%60),
	lefts = Math.floor(leftTime/1000%60);
	if(lefth==0 && leftm==0 && lefts==0){
		$('#bgclockshade').html("生日快乐");
		$('#login-button').html("进入");
	}
	else{
		if(lefth < 10) lefth = "0"+String(lefth);
		if(leftm < 10) leftm = "0"+String(leftm);
		if(lefts < 10) lefts = "0"+String(lefts);
		var timeStr = lefth+":"+leftm+":"+lefts;
		$('#bgclockshade').html(timeStr);
		var timer = setTimeout("clockRefresh()", 500);
	}
}
