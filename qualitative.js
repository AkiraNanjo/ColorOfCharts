function makeQualitativeColorScheme(){
	var defL=50; //Lの値
	var a=98; //aの値
	var b=94; //bの値
	var RGB; //Labから変換したRGBを保持する
	var delta_E = 50; //取るべき色差
	var adding_L; //変化させるLの大きさ
	var entry_a = false; //aの値が有効範囲に入っているかどうかの状態を保持する
	var P_in_circumference = [];//あるLでの色領域の外周の点を保存する
	var nominal_Color = []; //最終的に作成した名義尺度用の色を保存する
	var temp_nominal_Color = []; //保存前の最終確認用に一時的に保持する
	var checkRGB; //RGBであるかどうかの判別に用いる

	//あるLにおけるab領域の外周点を検出して保存する
	
	/*
	function make_P (Lnum){
		var j=0; //抽出した外周点の数
		//ループごとに配列は初期化
		P_in_circumference=[];
		
		//a,bの最小値からスタート
		for(b=-108 ; b <= 94 ;b++){
			for(a=-86 ; a <= 98; a++){
				//現在のLabからRGBを作成
				RGB = Lab2RGB(Lnum,a,b);
				//チェック1：各RGBが0〜255の範囲にあるかどうかチェック
				if((RGB.R<=255 && RGB.G<=255 && RGB.B<=255 && RGB.R>=0 && RGB.G>=0 && RGB.B>=0)){
					//0~255の範囲である時・・・
					if(entry_a==false){
						//aが初めてこの領域に侵入した場合
						entry_a=true;
						P_in_circumference[j]={L:Lnum, a:a, b:b};
						j++;
					}else if (entry_a==true){
						//すでにaが有効範囲にある場合
						//1.b+1（今調べているbの次の行）について・・・
						checkRGB = Lab2RGB(Lnum,a,b+1);
						if(checkRGB.R>255 || checkRGB.G>255 || checkRGB.B>255 || checkRGB.R<0 || checkRGB.G<0 || checkRGB.B<0){
							//b+1でrgbが範囲外になった場合このa,bは外周点である
							entry_a=true;
							P_in_circumference[j]={L:Lnum, a:a, b:b};
							j++;
						}
						//2.b-1(今調べている行の後ろ)について・・・
						checkRGB = Lab2RGB(Lnum,a,b-1);
						if(checkRGB.R>255 || checkRGB.G>255 || checkRGB.B>255 || checkRGB.R<0 || checkRGB.G<0 || checkRGB.B<0){
							//b-1でrgbの範囲外になる場合、このabは外周点である
							entry_a=true;
							P_in_circumference[j]={L:Lnum, a:a, b:b};
							j++;	
						}
					}
				}else if((RGB.R>255 || RGB.G>255 || RGB.B>255 || RGB.R<0 || RGB.G<0 || RGB.B<0) && entry_a==true){
					//aが有効領域内に侵入した後でRGBの範囲外に出た場合、aは最外周点の一つ右である
					entry_a=false;
					P_in_circumference[j]={L:Lnum, a:a-1, b:b};
					j++;
				}
			}
		}
	}
	
	make_P(defL);//最初はdefL=50にて最外周点を検出
	
	*/
	
	
	
	//外周点を替えるぞこの野郎
	/*
	var array_of_color = [];
	var length = P_in_circumference.length;
	function rearray(){
		var temp_value=0;
		var minimum_value = 100;
		var minimum_index;
		var firstpoint = P_in_circumference[0];
		P_in_circumference.splice(0,1);
		array_of_color.push(firstpoint);
		for(var i=0;i<length;i++){
			if(i<length-1){
				for(var j=0; j<P_in_circumference.length-1; j++){
					temp_value = Math.sqrt(Math.pow(array_of_color[i].a-P_in_circumference[j].a,2)+Math.pow(array_of_color[i].b-P_in_circumference[j].b,2));
					if(temp_value<minimum_value){
						minimum_value=temp_value;
						minimum_index=j;
					}
				}
				array_of_color.push(P_in_circumference[minimum_index]);
				P_in_circumference.splice(minimum_index-1,1);
			}else{
				array_of_color.push(P_in_circumference[i]);
			}
		}
		
		P_in_circumference.length=0;
		for(var i=0; i<length;i++){
			P_in_circumference[i]=array_of_color[i];
		}
		*/
	
	//makeColorCircle();
	
	
		P_in_circumference.length=0;
		P_in_circumference = qual2;
		var now_color;
		var before_color;
		var cocococococ=0;
		var canvas = document.getElementById("canvas");
		if (canvas.getContext){
			var ctx = canvas.getContext('2d');
			for(var i=0; i<P_in_circumference.length; i++){
				var canvasRGB =  Lab2RGB(P_in_circumference[i].L,P_in_circumference[i].a,P_in_circumference[i].b);
				RGB = "rgb("+canvasRGB.R+","+canvasRGB.G+","+canvasRGB.B+")";
				ctx.fillStyle = RGB;
				//ctx.fillRect(P_in_circumference[i].a+125,-P_in_circumference[i].b+125,4,4);
				ctx.fillRect(3*i,125,4,4);

				if(i!=0){
					before_color=now_color;	
				}
				now_color=RGB;
				if(before_color==now_color){
					cocococococ++;
				}
			}
		}	
	//}
	

	//rearray();
	
	
	/*
	adding_L = (decide_L()-defL)/colornum2;//中央のLと目的地の印象のLの差を色数で割ったものがLの変化量
	//外周の色からランダムに選択する
	function pickup_color(){
		var randNum = Math.floor(Math.random()*P_in_circumference.length);
		return {L:P_in_circumference[randNum].L, a:P_in_circumference[randNum].a, b:P_in_circumference[randNum].b};
	}
	*/
	
	/*
	//var loop = false;
	var k=0; //現在の外周点何回抽出したかカウントする
	var nominal=0; //作成した色の数
	var determine_possible = true;
	for(var i=0; nominal_Color.length<colornum2;i++){
		//最外周を抽出して一定回数以上距離差が閾値以上取れなければLを変更する(段をずらす)
		if(k>50){
			k=0;
			delta_E = delta_E-i*5;
		}
		//最初の一色
		if(i==0){
			temp_nominal_Color[i] = pickup_color();
			nominal_Color[nominal] = temp_nominal_Color[i];
			nominal++;
			defL = Math.round(defL+adding_L);
			make_P(defL);
		}else{//2色目以降
			determine_possible=true;
			temp_nominal_Color[i] = pickup_color();
			for(var l=0; l<nominal_Color.length;l++){
				//今まで選択した色との差の計算
				var sub_a = temp_nominal_Color[i].a-nominal_Color[l].a;
				var sub_b = temp_nominal_Color[i].b-nominal_Color[l].b;
				var sub_nominal = Math.sqrt(Math.pow(sub_a,2)+Math.pow(sub_b,2));
				//距離差がn以下なら識別不可としてループ打ち切り
				if(sub_nominal<delta_E){
					determine_possible=false;
					break;
				}
			}
			//最後まで検査して識別可能であればその色を保存する
			if(determine_possible==true){
				nominal_Color[nominal] = temp_nominal_Color[i];
				nominal++;
				defL = Math.round(defL+adding_L);
				make_P(defL);
			}	
		}
		k++;
	}
	*/
	
	
	for(var i=0; i<12;i++){
		var temp_qual = qual[i];
		var dist = Math.floor(temp_qual.length/colornum2);
		var index = 0;
		//var data = new Object();
		for(var j=0; j<colornum2; j++){
			var nominal_RGB = Lab2RGB(temp_qual[index].L,temp_qual[index].a,temp_qual[index].b);
			if(nominal_RGB.R>255){nominal_RGB.R=255;}
			if(nominal_RGB.G>255){nominal_RGB.G=255;}
			if(nominal_RGB.B>255){nominal_RGB.B=255;}
			if(nominal_RGB.R<0){nominal_RGB.R=0;}
			if(nominal_RGB.G<0){nominal_RGB.G=0;}
			if(nominal_RGB.B<0){nominal_RGB.B=0;}
			RGB = "rgb("+nominal_RGB.R+","+nominal_RGB.G+","+nominal_RGB.B+")";
			var hex = new RGBColor(RGB).toHex();
			var idName = "#"+i+"FirstColorScheme2"+j;
			$(idName).css("background-color", hex);
			index += dist;
		}
	}
}//calc()

function pickup_color(num){
	var temp_qual = qual[num];
	var qual_scheme = [];
	var dist = temp_qual.length/colornum2;
	var rand = Math.floor( Math.random() * temp_qual.length );
	var first = temp_qual[ rand ] ;
	qual_scheme.push(first);
	for(var i=0; i<colornum2-1;i++){
		qual_scheme.push(temp_qual[(rand+(dist*i))%temp_qual.length]);
	}
	return qual_scheme;
}


function decide_L(){
	switch (coloratomos2){
		case "#000000":
			return 0;
			break;
		case "#FFFFFF":
			return 100;
			break;
		case "Vivid":
			return 57.12;
			break;
		case "Bright":
			return 71.42;
			break;
		case "Strong":
			return 49.98;
			break;
		case "Deep":
			return 21.42;
			break;
		case "Light":
			return 78.54;
			break;
		case "Soft":
			return 64.26;
			break;
		case "Dull":
			return 42.84;
			break;
		case "Dark":
			return 14.28;
			break;
		case "Pale":
			return 92.82;
			break;
		case "Ltg":
			return 85.68;
			break;
		case "Grayish":
			return 35.7;
			break;
		case "Dkg":
			return 7.14;
			break;
	}
}

function makeColorCircle(){
	var first = pc2[0];
	var dist;
	var bef;
	var aft;
	var befLab;
	var aftLab;
	var interval_L;
	var interval_a;
	var interval_b;
	var temp_L;
	var temp_a;
	var temp_b;
	var temp_qual;
	for(var k=0; k<12; k++){
		temp_qual = qual[k];
		for(var i=0; i<12; i++){
			bef = pcs[i%12];
			aft = pcs[(i+1)%12];
			befLab = RGB2Lab(bef[k]);
			aftLab = RGB2Lab(aft[k]);
			dist = Math.sqrt(Math.pow(befLab.LS-aftLab.LS,2)+Math.pow(befLab.aS-aftLab.aS,2)+Math.pow(befLab.bS-aftLab.bS,2));
			interval_L = (aftLab.LS-befLab.LS)/dist;
			interval_a = (aftLab.aS-befLab.aS)/dist;
			interval_b = (aftLab.bS-befLab.bS)/dist;
			for(var j=0; j<Math.floor(dist);j++){
				if(j==0){
					temp_L = befLab.LS;
					temp_a = befLab.aS;
					temp_b = befLab.bS;
					temp_qual.push({L:temp_L,a:temp_a,b:temp_b});
				}else{
					temp_L = temp_L+(interval_L);
					temp_a = temp_a+(interval_a);
					temp_b = temp_b+(interval_b);
					temp_qual.push({L:temp_L,a:temp_a,b:temp_b});
				}
			}
		}
	}
}