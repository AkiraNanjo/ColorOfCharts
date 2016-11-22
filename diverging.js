function makeDivergingColorScheme2(Lstar1,aStar1,bStar1,Lstar2,aStar2,bStar2,tone, colorID){
/*
基本動作
メニュー「atomos」に入力されたトーンに該当するカラーを終点とし、クリックされた色から出発してcolornum2に応じた内分点を取る
*/
	var calcLstar = [];//計算して算出したLabの値を保存
	var calcaStar = [];
	var calcbStar = [];
	var calcRGB;
	var RGB="rgb(255,255,255)";
	var Hex;
	var change_number;
	var dividing = colornum2-2;//内分点の数は始点と終点の2つを除いた数
	var dividing_L, dividing_a, dividing_b;
	
	//左側
	var usigColor = pcs[colorID/2-1];
	var startRGB = new RGBColor(usigColor[tone]);
	var startColor = RGB2Lab(startRGB.toRGB());
	Lstar1 = startColor.LS;
	aStar1 = startColor.aS;
	bStar1 = startColor.bS;
	calcLstar[0] = Lstar1;
	calcaStar[0] = aStar1;
	calcbStar[0] = bStar1;
	
	//右側
	var usingRight = pcs[((colorID/2-1)+6)%12];
	var startRightRGB = new RGBColor(usingRight[tone]);
	var startRightColor = RGB2Lab(startRightRGB.toRGB());
	Lstar2 = startRightColor.LS;
	aStar2 = startRightColor.aS;
	bStar2 = startRightColor.bS;
	
	//入力されたイメージのカラーを色相環から拾ってくる
	var goalColor1;//goalcolor 終点の色、雰囲気メニューから決定される
	var goalColor2;
	//var goalcolor;
	if(coloratomos2!="#000000" && coloratomos2 != "#FFFFFF"){
		var templeftRGB = new RGBColor(usigColor[coloratomos2]);
		var templeft = templeftRGB.toRGB();
		var temprightRGB = new RGBColor(usingRight[coloratomos2]);
		var tempright = temprightRGB.toRGB();
		var leftlab = RGB2Lab(templeft);
		var rightlab = RGB2Lab(tempright);
		var goalL = (leftlab.LS+rightlab.LS)/2;
		var goala = (leftlab.aS+rightlab.aS)/2;
		var goalb = (leftlab.bS+rightlab.bS)/2;
		var goallab = Lab2RGB(goalL,goala,goalb);
		var goalRGB = "rgb("+goallab.R+","+goallab.G+","+goallab.B+")";
		goalColor1 = goalRGB;
		goalColor2 = goalRGB;
	}else{
		goalColor1 = new RGBColor(coloratomos2).toRGB();
		goalColor2=goalColor1;
	}
	
	
	var goalLab1 = RGB2Lab(goalColor1);
	var goal_L1 = goalLab1.LS;
	var goal_a1 = goalLab1.aS;
	var goal_b1 = goalLab1.bS;
	var goalLab2 = RGB2Lab(goalColor2);
	var goal_L2 = goalLab2.LS;
	var goal_a2 = goalLab2.aS;
	var goal_b2 = goalLab2.bS;
	var k1 = (Lstar1*(Lstar1-goal_L1)+aStar1*(aStar1-goal_a1)+bStar1*(bStar1-goal_b1))/(Math.pow(goal_L1-Lstar1,2)+Math.pow(goal_a1-aStar1,2)+Math.pow(goal_b1-bStar1,2));
	var n1 = {nL:(goal_L1-Lstar1)*k1+Lstar1, na:(goal_a1-aStar1)*k1+aStar1, nb:(goal_b1-bStar1)*k1+bStar1};
	var k2 = (Lstar2*(Lstar2-goal_L2)+aStar2*(aStar2-goal_a2)+bStar2*(bStar2-goal_b2))/(Math.pow(goal_L2-Lstar2,2)+Math.pow(goal_a2-aStar2,2)+Math.pow(goal_b2-bStar2,2));
	var n2 = {nL:(goal_L2-Lstar2)*k2+Lstar2, na:(goal_a2-aStar2)*k2+aStar2, nb:(goal_b2-bStar2)*k2+bStar2};
	
	var headname = "#"+tone+"FirstColorScheme20";
	$(headname).css("background-color", startRGB.toHex());
	var tailname = "#"+tone+"FirstColorScheme2"+(colornum2-1);
	$(tailname).css("background-color", startRightRGB.toHex());
	
	
	//終着点のLab座標；
	if(colornum2%2==0){
		//カラー1、左側のカラースキーム
		calcRGB = Lab2RGB(Lstar1,aStar1,bStar1);
		var RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
		var testColor = new RGBColor(RGB);
		var hex = testColor.toHex();
		
		dividing = Math.floor(dividing/2);
		for (var i=0; i<dividing; i++){
			dividing_L = (Lstar1*(dividing-i)+goal_L1*(i+1))/(dividing+1);
			calcLstar[i+1]=dividing_L;
			dividing_a = (aStar1*(dividing-i)+goal_a1*(i+1))/(dividing+1);
			calcaStar[i+1]=dividing_a;
			dividing_b = (bStar1*(dividing-i)+goal_b1*(i+1))/(dividing+1);
			calcbStar[i+1]=dividing_b;
			calcRGB = Lab2RGB(dividing_L,dividing_a,dividing_b);
			if(calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0){
				var check=0;
				for(var t=0; check<100&&calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0; t=t+0.01){
					dividing_L = dividing_L-t*n1.nL;
					dividing_a = dividing_a-t*n1.na;
					dividing_b = dividing_b-t*n1.nb;
					calcRGB = Lab2RGB(dividing_L,dividing_a,dividing_b);
					check++;
				}
			}
			RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
			hex = new RGBColor(RGB).toHex();
			//hex = testColor.toHex();
			var idName = "#"+tone+"FirstColorScheme2"+(i+1);
			//$(function(){
			$(idName).css("background-color", hex);
			//$(idName).html(" "+RGB+" ");
			//});
		}
		//カラー2、右側のカラースキーム
		calcRGB = Lab2RGB(Lstar2,aStar2,bStar2);
		var RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
		var testColor = new RGBColor(RGB);
		var hex = testColor.toHex();
		var rightName = "#ColorScheme"+(colornum2-1);
		$(rightName).css("background-color", hex);
		$(rightName).html(RGB);
		for (var i=0; i<dividing; i++){
			dividing_L = (Lstar2*(dividing-i)+goal_L2*(i+1))/(dividing+1);
			calcLstar[i+1]=dividing_L;
			dividing_a = (aStar2*(dividing-i)+goal_a2*(i+1))/(dividing+1);
			calcaStar[i+1]=dividing_a;
			dividing_b = (bStar2*(dividing-i)+goal_b2*(i+1))/(dividing+1);
			calcbStar[i+1]=dividing_b;
			calcRGB = Lab2RGB(dividing_L,dividing_a,dividing_b);
			if(calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0){
				var check=0;
				for(var t=0; check<100&&calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0; t=t+0.01){
					dividing_L = dividing_L-t*n1.nL;
					dividing_a = dividing_a-t*n1.na;
					dividing_b = dividing_b-t*n1.nb;
					calcRGB = Lab2RGB(dividing_L,dividing_a,dividing_b);
					check++;
				}
			}
			RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
			hex = new RGBColor(RGB).toHex();
			//hex = testColor.toHex();
			//var idName = "#ColorScheme"+(colornum2-2-i);
			var idName = "#"+tone+"FirstColorScheme2"+(colornum2-2-i);
			//$(function(){
			$(idName).css("background-color", hex);
			//$(idName).html(" "+RGB+" ");
			//});
		}		
	}else if(colornum2%2==1){
		//カラー1、左側のカラースキーム
		calcRGB = Lab2RGB(Lstar1,aStar1,bStar1);
		var RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
		var testColor = new RGBColor(RGB);
		var hex = testColor.toHex();
		$('#ColorScheme0').css("background-color", hex);
		$('#ColorScheme0').html(RGB);
		dividing = Math.floor(dividing/2);
		for (var i=0; i<dividing; i++){
			dividing_L = (Lstar1*(dividing-i)+goal_L1*(i+1))/(dividing+1);
			calcLstar[i+1]=dividing_L;
			dividing_a = (aStar1*(dividing-i)+goal_a1*(i+1))/(dividing+1);
			calcaStar[i+1]=dividing_a;
			dividing_b = (bStar1*(dividing-i)+goal_b1*(i+1))/(dividing+1);
			calcbStar[i+1]=dividing_b;
			calcRGB = Lab2RGB(dividing_L,dividing_a,dividing_b);
			if(calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0){
				var check=0;
				for(var t=0; check<100&&calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0; t=t+0.01){
					dividing_L = dividing_L-t*n1.nL;
					dividing_a = dividing_a-t*n1.na;
					dividing_b = dividing_b-t*n1.nb;
					calcRGB = Lab2RGB(dividing_L,dividing_a,dividing_b);
					check++;
				}
			}
			RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
			hex = new RGBColor(RGB).toHex();
			//hex = testColor.toHex();
			//var idName = "#ColorScheme"+(i+1);
			var idName = "#"+tone+"FirstColorScheme2"+(i+1);
			$(idName).css("background-color", hex);
		}
		//カラー2、右側のカラースキーム
		calcRGB = Lab2RGB(Lstar2,aStar2,bStar2);
		var RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
		var testColor = new RGBColor(RGB);
		var hex = testColor.toHex();
		var rightName = "#ColorScheme"+(colornum2-1);
		$(rightName).css("background-color", hex);
		$(rightName).html(RGB);
		for (var i=0; i<dividing; i++){
			dividing_L = (Lstar2*(dividing-i)+goal_L2*(i+1))/(dividing+1);
			calcLstar[i+1]=dividing_L;
			dividing_a = (aStar2*(dividing-i)+goal_a2*(i+1))/(dividing+1);
			calcaStar[i+1]=dividing_a;
			dividing_b = (bStar2*(dividing-i)+goal_b2*(i+1))/(dividing+1);
			calcbStar[i+1]=dividing_b;
			calcRGB = Lab2RGB(dividing_L,dividing_a,dividing_b);
			if(calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0){
				var check=0;
				for(var t=0; check<100&&calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0; t=t+0.01){
					dividing_L = dividing_L-t*n1.nL;
					dividing_a = dividing_a-t*n1.na;
					dividing_b = dividing_b-t*n1.nb;
					calcRGB = Lab2RGB(dividing_L,dividing_a,dividing_b);
					check++;
				}
			}
			RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
			hex = new RGBColor(RGB).toHex();
			//hex = testColor.toHex();
			var idName = "#"+tone+"FirstColorScheme2"+(colornum2-2-i);
			//$(function(){
			$(idName).css("background-color", hex);
			//$(idName).html(" "+RGB+" ");
			//});
			//});
		}
		testColor = new RGBColor(goalColor1);
		hex = testColor.toHex();
		var centerName = "#"+tone+"FirstColorScheme2"+Math.floor(colornum2/2);
		$(centerName).css("background-color", hex);
		RGB = new RGBColor(hex).toRGB();
		//$(centerName).html(new RGBColor(hex).toRGB());
	}
	
}