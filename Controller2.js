//グローバル変数群
var colornum2=6;
var coloratomos2="#000000";
var clickedColor2 = "rgb(238,0,38)";
var clickedColor3 = "rgb(238,0,38)";
var scale2 = "sequential";
var maincolor = "rgb(238,0,38)"
var after_nominal = false;
var RGBDataSet = []; //グラフの作成に用いるカラースキームが格納されている
var chartcolorscheme = [];
var clickedtone = 0;
var id=2; //現在選択されているトーンのid
var sequential_scheme = [];
var selectedchart = "circle";
var backgroundcolor = "#ffffff";


//calc():名義尺度用の色を作成する


//グラフを作る
function makechart(now){
	RGBDataSet.length=0;
	chartcolorscheme.length=0;
	var idName;
	var hex;
	//alert("now="+now);
	for (var i=0; i<colornum2;i++){
		idName = "#"+now+"FirstColorScheme2"+i;
		hex = $(idName).css("background-color");
		var data = new Object();
		data.legend = hex;
		data.value = Math.floor( Math.random() * 11 )+10;
		data.color = hex;
		RGBDataSet[i] = data;
		chartcolorscheme[i]=hex;
	}
	drawchart(RGBDataSet);
}

//トーンのラジオボタンが変更された時
function changeRadio(now){
	clickedtone=now;
	makechart(now);
}

//データの尺度が変更された時
function changeScale2(){
	scale2=select_scale2.scale2.value;
    colornum2=Sample2_form.number2.value;
	document.getElementById("chartplace").innerHTML="";
	if(scale2=="qualitative"){
		//coloratomos2 = Sample2_form.atomos2.value;
		defineScale2();
		makeQualitativeColorScheme();
		//drawchart(RGBDataSet);
	}else if(scale2=="sequential"){
		coloratomos2 = "#000000";
		defineScale2();
		makechart(clickedtone);
	}else if(scale2=="diverging"){
		coloratomos2 = "#000000";
		defineScale2();
		var return_Lab1 = RGB2Lab(clickedColor2);
		var return_Lab2 = RGB2Lab(clickedColor3);
		//var colorScheme = //makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS,);
		makechart(clickedtone);
	}
	console.log(coloratomos2);
    //defineScale2();
	
}


//2の雰囲気メニューが変更された時に呼び出される
function changeAtomos2(){
	
	if(scale2=="sequential"){
		//coloratomos2 = Sample2_form.atomos2.value;
		makedivelements();
		var return_Lab = RGB2Lab(clickedColor2);
		for (var i=0; i<12;i++){
				makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS,i,id);
		}
		makechart(clickedtone);
	}else if(scale2=="diverging"){
		//coloratomos2 = Sample2_form.atomos2.value;
		makedivelements();
		var return_Lab1 = RGB2Lab(clickedColor2);
		var return_Lab2 = RGB2Lab(clickedColor2);
		console.log("changeatomos, diverging");
		console.log("in diverging, coloratomos="+coloratomos2);
		for (var i=0; i<12;i++){		makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS,i,id);
		}
		makechart(clickedtone);
	}else if(scale2=="qualitative"){
		document.getElementById("chartplace").innerHTML="";
		coloratomos2 = Sample2_form.atomos2.value;
		RGBDataSet=[];
		Sample2();
		makeQualitativeColorScheme();
		drawchart(RGBDataSet);
	}
	
}

//2の色数メニューが変更された時に呼び出される
function changeNum2(){
	console.log("scale="+scale2);
	colornum2 = Sample2_form.number2.value;
	document.getElementById("chartplace").innerHTML="";
	if(scale2=="sequential"){
		Sample2();
		var return_Lab = RGB2Lab(clickedColor2);
		for (var i=0; i<12;i++){
				makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS,i,id);
			}
		makechart(clickedtone);
	}else if(scale2=="qualitative"){
		RGBDataSet=[];
		Sample2();
		makeQualitativeColorScheme();
		//drawchart(RGBDataSet);
	}else if(scale2=="diverging"){
		Sample2();
		var return_Lab1 = RGB2Lab(clickedColor2);
		var return_Lab2 = RGB2Lab(clickedColor3);
		for (var i=0; i<12;i++){
				makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS,i,id);
		}
		makechart(clickedtone);
	}
}
/*
//2のメインカラーメニューが変更された場合に変更される
function changeMainColor2(){
	if(scale2=="sequential"){
	var hogehoge = Sample2_form.drop2.value;//リストから色を取得
    switch(hogehoge){
		case "#EE0026":
			redColor2();
			break;
		case "#33A23D":
			greenColor2();
			break;
		case "#0F218B":
			blueColor2();
			break;
		case "#055D87":
			cyanColor2();
			break;
		case "#FF7F00":
			orangeColor2();
			break;
    }
	Sample2();
	var startColor = new RGBColor(hogehoge).toRGB();
	clickedColor2 =startColor;
	var return_Lab = RGB2Lab(clickedColor2);
	var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
	}else if(scale2=="diverging"){
		var hogehoge = Sample2_form.drop2.value;//リストから色を取得
		var hogehoge2 = Sample2_form.drop3.value;
		switch(hogehoge){
			case "#EE0026":
				redColor2();
				break;
			case "#33A23D":
				greenColor2();
				break;
			case "#0F218B":
				blueColor2();
				break;
			case "#055D87":
				cyanColor2();
				break;
			case "#FF7F00":
				orangeColor2();
				break;
		}
		Sample2();
		var startColor1 = new RGBColor(hogehoge).toRGB();
		var startColor2 = new RGBColor(hogehoge2).toRGB();
		clickedColor2 =startColor1;
		clickedColor3 = startColor2;
		var return_Lab1 = RGB2Lab(clickedColor2);
		var return_Lab2 = RGB2Lab(clickedColor3);
		var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
	}
}
/*
function changeSubColor2(){
	var hogehoge = Sample2_form.drop2.value;//リストから色を取得
	var hogehoge2 = Sample2_form.drop3.value;
	console.log("hogehoge2="+hogehoge2);
    switch(hogehoge2){
		case "#EE0026":
			redColor3();
			break;
		case "#33A23D":
			greenColor3();
			break;
		case "#0F218B":
			blueColor3();
			break;
		case "#055D87":
			cyanColor3();
			break;
		case "#FF7F00":
			orangeColor3();
			break;
    }
	Sample2();
	var startColor1 = new RGBColor(hogehoge).toRGB();
	var startColor2 = new RGBColor(hogehoge2).toRGB();
	clickedColor2 =startColor1;
	clickedColor3 = startColor2;
	var return_Lab1 = RGB2Lab(clickedColor2);
	var return_Lab2 = RGB2Lab(clickedColor3);
	var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
}

*/

function changechart(){
	selectedchart = charttype.chart.value;
	makechart(clickedtone);
}

function changebackgroundcolor(){
	backgroundcolor = charttype.colorselect.value;
	$("#chartplace").css("background-color",backgroundcolor);
	checkbackgroundcolor();
}