
//ページ読み込み時に作動、クリックされた位置の色を取得して渡す


$(window).load(function (){
	//reLoading();
	//reLoadingDiverging();
	
	//読み込んだSVGの色相サークルからIDを抽出してJqueryオブジェクトに変換する
	//toneSetting();
	//色相環のクリックイベント
	var fig = document.getElementById('svg-fig2').contentDocument;
    $fig = $(fig);
	$pccsall = $fig.find("#colorcircle");
    $pccs1 = $fig.find("#pccs1 path");$pccs2 = $fig.find("#pccs2 path");
	$pccs3 = $fig.find("#pccs3 path");$pccs4 = $fig.find("#pccs4 path");
	$pccs5 = $fig.find("#pccs5 path");$pccs6 = $fig.find("#pccs6 path");
	$pccs7 = $fig.find("#pccs7 path");$pccs8 = $fig.find("#pccs8 path");
	$pccs9 = $fig.find("#pccs9 path");$pccs10 = $fig.find("#pccs10 path");
	$pccs11 = $fig.find("#pccs11 path");$pccs12 = $fig.find("#pccs12 path");
	$pccs13 = $fig.find("#pccs13 path");$pccs14 = $fig.find("#pccs14 path");
	$pccs15 = $fig.find("#pccs15 path");$pccs16 = $fig.find("#pccs16 path");
	$pccs17 = $fig.find("#pccs17 path");$pccs18 = $fig.find("#pccs18 path");
	$pccs19 = $fig.find("#pccs19 path");$pccs20 = $fig.find("#pccs20 path");
	$pccs21 = $fig.find("#pccs21 path");$pccs22 = $fig.find("#pccs22 path");
	$pccs23 = $fig.find("#pccs23 path");$pccs24 = $fig.find("#pccs24 path");
	fillpccs1();	
	$pccs2.click(function(){var circlecolor = $(this).css("fill");
			id =2;
			clickevent();
							//Color1();
        });
	
	$pccs4.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =4;
			clickevent();
        });
	$pccs6.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =6;
			clickevent();
        });
	$pccs8.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =8;
			clickevent();
        });
	$pccs10.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
		   //var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			id =10;
			clickevent();
        });
	$pccs12.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =12;
			clickevent();
							 //Color12();
        });
	$pccs14.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =14;
			clickevent();
        });
	$pccs16.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =16;
			clickevent();
        });
	$pccs18.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =18;
			clickevent();
        });
	$pccs20.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =20;
			clickevent();
        });
	$pccs22.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id =22;
			clickevent();
        });
	$pccs24.click(function(){
			//clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           //var return_Lab = RGB2Lab(circlecolor);
			id=24;
			clickevent();
        });
	
	
	//トーンサークルのクリックイベント
	var fig2 = document.getElementById('svg-fig3').contentDocument;
    $fig2 = $(fig2);
	//$pccsall = $fig.find("#colorcircle");
    $Vividtone = $fig2.find("#Vividtone circle");
	$Brighttone = $fig2.find("#Brighttone circle");
	$Strongtone = $fig2.find("#Strongtone circle");
	$Deeptone = $fig2.find("#Deeptone circle");
	$Lighttone = $fig2.find("#Lighttone circle");
	$Softtone = $fig2.find("#Softtone circle");
	$Dulltone = $fig2.find("#Dulltone circle");
	$Darktone = $fig2.find("#Darktone circle");
	$Paletone = $fig2.find("#Paletone circle");
	$LightGrayishtone = $fig2.find("#LightGrayishtone circle");
	$Grayishtone = $fig2.find("#Grayishtone circle");
	$DarkGrayishtone = $fig2.find("#DarkGrayishtone circle");
	$Whitetone = $fig2.find("#Whitetone circle");
	$Blacktone = $fig2.find("#Blacktone circle");
		
	$Vividtone.click(function(){
		coloratomos2 = 0;
		changeAtomos2();
    });
	$Brighttone.click(function(){
			coloratomos2 = 1;
			changeAtomos2();
        });
	$Strongtone.click(function(){
			coloratomos2 = 2;
			changeAtomos2();
        });
	$Deeptone.click(function(){
			coloratomos2 = 3;
			changeAtomos2();
        });
	$Lighttone.click(function(){
			coloratomos2 = 4;
			changeAtomos2();
        });
	$Softtone.click(function(){
			coloratomos2 = 5;
			changeAtomos2();
        });
	$Dulltone.click(function(){
			coloratomos2 = 6;
			changeAtomos2();
        });
	$Darktone.click(function(){
			coloratomos2 = 7;
			changeAtomos2();
        });
	$Paletone.click(function(){
			coloratomos2 = 8;
			changeAtomos2();
        });
	$LightGrayishtone.click(function(){
			coloratomos2 = 9;
			changeAtomos2();
        });
	$Grayishtone.click(function(){
			coloratomos2 = 10;
			changeAtomos2();
        });
	$DarkGrayishtone.click(function(){
			coloratomos2 = 11;
			changeAtomos2();
        });
	$Whitetone.click(function(){
			coloratomos2 = "#FFFFFF";
			changeAtomos2();
        });
	$Blacktone.click(function(){
			coloratomos2 = "#000000";
			changeAtomos2();
        });
		
	
	//#qualに名義データの色相範囲を指定するためのdiv要素その他もろもろを作成
	document.getElementById("qual").innerHTML="";
    var qual_element = document.createElement("div");
	//innerHTMLの初期化
    var innerStr = " ";
	console.log("aaaaaaa");
	for(var i=0; i<12; i++){
		//作成する色の数だけid=color2nの箱を作成し、配置する。
		innerStr = innerStr+("<div id=\"QualColorScheme"+i+"\" class=\"qscheme\">"+" "+"</div>");
	}
	qual_element.innerHTML = innerStr;
    var object2 = document.getElementById("qual");
    object2.appendChild(qual_element);
	for(var i=0; i<12; i++){
		var color = pcs[i];
		color = color[0];
		console.log("color="+color);
		var idName = "#QualColorScheme"+i;
		$(idName).css("background-color", color);
	}
	
	
	//ページ読み込み時の初期化
		defineScale2();
        var hogehoge = "#EE0026";//リストから色を取得
        
	    makeColorCircle();
	
	
		maincolor=hogehoge;
		coloratomos2="#000000";
		var return_Lab = RGB2Lab(clickedColor2);
		for (var i=0; i<12;i++){	makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS,i,id);
			}
		//var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
	//calc();
	changeRadio(id);
	fill_tone_space();
});



function clickevent(){
			var circlecolor = "#000000";
			clickedColor2 = circlecolor;
           //$selectedcolor2.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
			if(scale2=="diverging"){
			//coloratomos2=Sample2_form.atomos2.value;
			var return_Lab1 = RGB2Lab(clickedColor2);
			var return_Lab2 = RGB2Lab(clickedColor2);
			for(var i=0; i<12; i++){
				makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS,i,id);
			}
			}else{
				for (var i=0; i<12;i++){
					makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS,i,id);
				}
			}
	fill_tone_space();
	makechart(clickedtone);
}

//トーンスペースを現在選択している色相で配色する
function fill_tone_space(){
	var hue = pcs[(id/2)-1];
	$Vividtone.css("fill",hue[0]);
	$Brighttone.css("fill",hue[1]);
	$Strongtone.css("fill",hue[2]);
	$Deeptone.css("fill",hue[3]);
	$Lighttone.css("fill",hue[4]);
	$Softtone.css("fill",hue[5]);
	$Dulltone.css("fill",hue[6]);
	$Darktone.css("fill",hue[7]);
	$Paletone.css("fill",hue[8]);
	$LightGrayishtone.css("fill",hue[9]);
	$Grayishtone.css("fill",hue[10]);
	$DarkGrayishtone.css("fill",hue[11]);
}

/*
function toneSetting(){
	var fig1 = document.getElementById('svg-fig3').contentDocument;
       $fig1 = $(fig1);
       $Vivid3 = $fig1.find("#Vivid3 circle");$Bright3 = $fig1.find("#Bright3 circle");
       $Strong3 = $fig1.find("#Strong3 circle");$Deep3 = $fig1.find("#Deep3 circle");
       $Light3 = $fig1.find("#Light3 circle");$Soft3 = $fig1.find("#Soft3 circle");
       $Dull3 = $fig1.find("#Dull3 circle");$Dark3 = $fig1.find("#Dark3 circle");
       $Pale3 = $fig1.find("#Pale3 circle");$Ltg3 = $fig1.find("#Ltg3 circle");
       $Grayish3 = $fig1.find("#Grayish3 circle");$Dkg3 = $fig1.find("#Dkg3 circle");
		$White3 = $fig1.find("#White3 circle");
		$Black3 = $fig1.find("#Black3 circle");
		$White3.click(function(){var circlecolor = $(this).css("fill");
			clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
		$Black3.click(function(){var circlecolor = $(this).css("fill");
			clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
		
        $Vivid3.click(function(){var circlecolor = $(this).css("fill");
			clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Bright3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Strong3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Deep3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Light3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Soft3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Dull3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Dark3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Pale3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Ltg3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Grayish3.click(function(){var circlecolor = $(this).css("fill");
           clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
           var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
        $Dkg3.click(function(){var circlecolor = $(this).css("fill");
			clickedColor1 = circlecolor;
           $selectedcolor1.css({"fill": circlecolor});
			var return_Lab = RGB2Lab(circlecolor);
		   var colorScheme = makeColorScheme1(return_Lab.LS,return_Lab.aS,return_Lab.bS);
        });
	
	//ページ読み込み時の初期化
        Color1();
}
*/