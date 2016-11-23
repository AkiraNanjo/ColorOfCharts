//背景色とチャートの色の被りを検出する
function checkbackgroundcolor(){
	var flag = false;
	var backLab;
	var chartLab;
	var deltaE;
	
	//現在使用中のカラースキームを表示する
	function makeUsedScheme(error){
		document.getElementById("alertArea").innerHTML="";
		var div_element2 = document.createElement("div");
		var innerStr = " ";
		for(var i=0; i<colornum2; i++){
			//作成する色の数だけid=color2nの箱を作成し、配置する。
			if(error!=i){
				innerStr = innerStr+("<div id=\"usedColorScheme"+i+"\" class=\"usedscheme\"><font size=\"50\">"+(i+1)+"</font></div>");
			}else{
				innerStr = innerStr+("<div id=\"usedColorScheme"+i+"\" class=\"usedscheme\"><font size=\"50\">"+(i+1)+"</font></div>");
			}
		}
		div_element2.innerHTML = innerStr;
		var object2 = document.getElementById("alertArea");
		object2.appendChild(div_element2);
		for(var i=0; i<colornum2; i++){
			var idName = "#usedColorScheme"+i;
			var hex = new RGBColor(RGBDataSet[i].color).toHex();
			$(idName).css("background-color",hex);
			$(idName).css("width",(500/colornum2));
			$(idName).css("height",60);
		}
	}
	//makeUsedScheme(null);
	//チェック開始
	chartLab = RGB2Lab(new RGBColor(backgroundcolor).toRGB());
	for(var i=0; i<colornum2;i++){
		backLab = RGB2Lab(chartcolorscheme[i]);
		deltaE = Math.sqrt(Math.pow(backLab.LS-chartLab.LS,2)+Math.pow(backLab.aS-chartLab.aS,2)+Math.pow(backLab.bS-chartLab.bS,2));
		if(deltaE < 13){
			//$("#chartplace").css("border-style","dashed");
			//$("#chartplace").css("border-color","#ff0000");
			flag = true;
			makeUsedScheme(i);
			var div_element2 = document.createElement("div");
			var innerStr = " ";
			innerStr = "<h2>ATTENTION</h2><font size=\"5\">The Color of number <font color=\"red\">"+(i+1)+"</font> is not able to take enough color difference.</font>"
			div_element2.innerHTML = innerStr;
			var object2 = document.getElementById("alertArea");
			object2.appendChild(div_element2);
		}
	}
	if(!flag){
		//$("#chartplace").css("border-style","none");
		makeUsedScheme(null);
	}
	recommend_tone();
	checkbalanceadjoincolor();
}

//差の検出
function checkbalanceadjoincolor(){
	var flag = false;
	var leftLab;
	var rightLab;
	var deltaE;
	var color;
	var idName;
	var hex;
	var labelname;
	for(var j=0; j<12; j++){
		labelname = "#"+tonename[j]+"label";
		for(var i=0; i<colornum2-1;i++){
			idName = "#"+j+"FirstColorScheme2"+i;
			hex = $(idName).css("background-color");
			leftLab = RGB2Lab(new RGBColor(hex).toRGB());
			idName = "#"+j+"FirstColorScheme2"+(i+1);
			hex = $(idName).css("background-color");
			rightLab = RGB2Lab(new RGBColor(hex).toRGB());
			deltaE = Math.sqrt(Math.pow(leftLab.LS-rightLab.LS,2)+Math.pow(leftLab.aS-rightLab.aS,2)+Math.pow(leftLab.bS-rightLab.bS,2));
			if(deltaE < 13){
				$(labelname).css("opacity", 0.3);
				break;
			}else{
				$(labelname).css("opacity", 1);
			}
			
		}
	}
}

//背景色と最も近いPCCSのカラーを探索
function recommend_tone(){
	var minimum_Delta=100;
	var deltaE;
	var approximate_color;
	var approximate_tone;
	var temp_i;
	for(var i=0; i<12; i++){
		for(var j=0; j<12;j++){
			var lab = RGB2Lab(new RGBColor(pcs[i][j]).toRGB());
			var back_lab = RGB2Lab(new RGBColor(backgroundcolor).toRGB());
			deltaE = Math.sqrt(Math.pow(lab.LS-back_lab.LS,2)+Math.pow(lab.aS-back_lab.aS,2)+Math.pow(lab.bS-back_lab.bS,2));
			if(deltaE<minimum_Delta){
				minimum_Delta=deltaE;
				temp_i=i;
				approximate_color = pcs[i][j];
				approximate_tone = tonename[j];
			}
		}
	}
	
	coloring_recommended_ton_label(approximate_tone);		
}

//推奨トーンのラベルをハイライト labelname=="label"
/*
			for(var i=0; i<12; i++){
				labelname=tonename[i]+"label";
				if(){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
*/
function coloring_recommended_ton_label(tone){
	var labelname;
	console.log("back-tone="+tone);
	switch (tone){
		case "Vivid":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Softlabel"||labelname=="#Brightlabel"||labelname=="#Deeplabel"||labelname=="#Vividlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Bright":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Vividlabel"||labelname=="#Brightlabel"||labelname=="#Stronglabel"||labelname=="#Lightlabel"||labelname=="#Softlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Strong":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Stronglabel"||labelname=="#Vividlabel"||labelname=="#Brightlabel"||labelname=="#Deeplabel"||labelname=="#Softlabel"||labelname=="#Dulllabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Deep":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Deeplabel"||labelname=="#Vividlabel"||labelname=="#Stronglabel"||labelname=="#Dulllabel"||labelname=="#Darklabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Light":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Lightlabel"||labelname=="#Brightlabel"||labelname=="#Softlabel"||labelname=="#Palelabel"||labelname=="#LightGrayishlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Soft":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Softlabel"||labelname=="#Brightlabel"||labelname=="#Stronglabel"||labelname=="#Lightlabel"||labelname=="#Dulllabel"||labelname=="#Palelabel"||labelname=="#LightGrayishlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Dull":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Dulllabel"||labelname=="#Stronglabel"||labelname=="#Deeplabel"||labelname=="#Softlabel"||labelname=="#Darklabel"||labelname=="#LightGrayishlabel"||labelname=="#Grayishlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Dark":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Darklabel"||labelname=="#Deeplabel"||labelname=="#Dulllabel"||labelname=="#Grayishlabel"||labelname=="#DarkGrayishlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Pale":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Palelabel"||labelname=="#Lightlabel"||labelname=="#Softlabel"||labelname=="#LightGrayishlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "LightGrayish":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#LightGrayishlabel"||labelname=="#Lightlabel"||labelname=="#Softlabel"||labelname=="#Dulllabel"||labelname=="#Palelabel"||labelname=="#Grayishlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "Grayish":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#Grayishlabel"||labelname=="#Softlabel"||labelname=="#Dulllabel"||labelname=="#Darklabel"||labelname=="#LightGrayishlabel"||labelname=="#DarkGrayishlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
		case "DarkGrayish":
			for(var i=0; i<12; i++){
				labelname="#"+tonename[i]+"label";
				if(labelname=="#DarkGrayishlabel"||labelname=="#Dulllabel"||labelname=="#Darklabel"||labelname=="#Grayishlabel"){
					$(labelname).css("color", "red");
				}else{
					$(labelname).css("color", "black");
				}
			}
			break;
	}
			
}