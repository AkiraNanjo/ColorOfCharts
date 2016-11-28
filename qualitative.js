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


		var canvas = document.getElementById("canvas");
		if (canvas.getContext){
			var ctx = canvas.getContext('2d');
			for(var j=0; j<12; j++){
				var normalized = [];
				var used = qual[j].concat();
				console.log(used.length);
				var inter = used.length/100;
				for(var k=0; k<100;k++){
					normalized.push(used[Math.floor(k*inter)]);
				}
				console.log("normalized="+normalized.length);
				P_in_circumference.length=0;
				P_in_circumference = normalized.concat();
				
				
				
				
				for(var i=0; i<100; i++){
					var canvasRGB =  Lab2RGB(P_in_circumference[i].L,P_in_circumference[i].a,P_in_circumference[i].b);
					RGB = "rgb("+canvasRGB.R+","+canvasRGB.G+","+canvasRGB.B+")";
					ctx.fillStyle = RGB;
					//ctx.fillRect(P_in_circumference[i].a+125,-P_in_circumference[i].b+125,4,4);
					ctx.fillRect(10*i,50+(j*30),10,30);
				}
			}
		}	

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


//各トーンの色相環を作成、ページ読み込み時に実行
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