function makeColorScheme2(Lstar,aStar,bStar,tone, colorID){
/*
基本動作
メニュー「atomos」に入力されたトーンに該当するカラーを終点とし、クリックされた色から出発してcolornum2に応じた内分点を取る
*/
	//console.log("tone="+tone+" volorID="+colorID);
	var calcLstar = [];//計算して算出したLabの値を保存
	var calcaStar = [];
	var calcbStar = [];
	var calcRGB;
	var RGB="rgb(255,255,255)";
	var Hex;
	var change_number;
	var dividing = colornum2-2;//内分点の数は始点と終点の2つを除いた数
	var dividing_L, dividing_a, dividing_b;
	
	//console.log("colorID="+colorID);
	var usigColor = pcs[colorID/2-1];
	//console.log("pcs="+usigColor);
	var startRGB = new RGBColor(usigColor[tone]);
	//console.log("startRGB="+JSON.stringify(startRGB));
	var startColor = RGB2Lab(startRGB.toRGB());
	Lstar = startColor.LS;
	aStar = startColor.aS;
	bStar = startColor.bS;
	
	calcLstar[0] = Lstar;
	calcaStar[0] = aStar;
	calcbStar[0] = bStar;
	
	//入力されたイメージのカラーを色相環から拾ってくる
	var goalcolor;
	if(coloratomos2!="#000000" && coloratomos2 != "#FFFFFF"){
		var tepHex = usigColor[coloratomos2];
		var goalRGB = new RGBColor(tepHex);
		goalcolor = goalRGB.toRGB();
	}else{
		goalcolor = new RGBColor(coloratomos2).toRGB();
	}
	//定義されていない場合(ページ初読み込み時)は白に設定
	/*
	if(goalColor==undefined){
		goalColor="rgb(255,255,255)";
	}
	*/
	//終着点のLab座標；
	var goalLab = RGB2Lab(goalcolor);
	var goal_L = goalLab.LS;
	var goal_a = goalLab.aS;
	var goal_b = goalLab.bS;
	
	//スタート地点の色
	
	
	calcRGB = Lab2RGB(Lstar,aStar,bStar);
	
	var k = (Lstar*(Lstar-goal_L)+aStar*(aStar-goal_a)+bStar*(bStar-goal_b))/(Math.pow(goal_L-Lstar,2)+Math.pow(goal_a-aStar,2)+Math.pow(goal_b-bStar,2));
	var n = {nL:(goal_L-Lstar)*k+Lstar, na:(goal_a-aStar)*k+aStar, nb:(goal_b-bStar)*k+bStar};//法線ベクトル
	var hex;
	for(var i=0; i<colornum2; i++){
		calcLstar[i]=((colornum2-i-1)*Lstar+i*goal_L)/(colornum2-1);
		calcaStar[i]=((colornum2-i-1)*aStar+i*goal_a)/(colornum2-1);
		calcbStar[i]=((colornum2-i-1)*bStar+i*goal_b)/(colornum2-1);
		calcRGB = Lab2RGB(calcLstar[i],calcaStar[i],calcbStar[i]);
		
		if(calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0){
			var check=0;
			for(var t=0; check<100&&calcRGB.R>255||calcRGB.G>255||calcRGB.B>255||calcRGB.R<0||calcRGB.G<0||calcRGB.B<0; t=t+0.01){
				calcLstar[i] = calcLstar[i]-t*n.nL;
				calcaStar[i] = calcaStar[i]-t*n.na;
				calcbStar[i] = calcbStar[i]-t*n.nb;
				calcRGB = Lab2RGB(calcLstar[i],calcaStar[i],calcbStar[i]);
				check++;
			}
		}
		
		
		RGB = "rgb("+calcRGB.R+","+calcRGB.G+","+calcRGB.B+")";
		hex = new RGBColor(RGB).toHex();
		//hex = testColor.toHex();
		var idName = "#"+tone+"FirstColorScheme2"+i;
		//console.log("idName="+idName);
		/*
		var deltaE=0;
		if(i!=0){
			console.log("測ってまーす");
			deltaE = Math.sqrt(Math.pow(calcLstar[i]-calcLstar[i-1],2)+Math.pow(calcaStar[i]-calcaStar[i-1],2)+Math.pow(calcbStar[i]-calcbStar[i-1],2));
			var labelname = "#"+tonename[tone]+"label";
			//console.log(labelname+"=="+deltaE);
			if(deltaE < 13){
				//$(labelname).css("background-color", "#FF0000");
				$(labelname).css("opacity", 0.3);
				console.log(labelname+" : "+deltaE);
			}else{
				//$(labelname).css("background-color", "transparent");
				$(labelname).css("opacity", 1);
				console.log(labelname+" : "+deltaE);
			}
		}
		*/
		$(idName).css("background-color", hex);
		//$(idName).css("text-align", "center");
		//$(idName).html(Math.floor(deltaE));
	}
	
	
	check_sequential();
}


function check_sequential(){
	var hex;//= new RGBColor(RGB).toHex();
	//hex = testColor.toHex();
	for(var tone=0; tone<12; tone++){
		for(var i=0; i<colornum2; i++){
			var idName = "#"+tone+"FirstColorScheme2"+i;
			var deltaE=0;
			//sequential_scheme[tone][i]= $(idName).css("background-color");
			//$(idName).css("background-color", hex);
			//console.log()sequential_scheme[tone][i];
			//$(idName).css("text-align", "center");
			//$(idName).html(Math.floor(deltaE));
		}
	}
}

