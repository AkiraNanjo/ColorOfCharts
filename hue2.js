//var Sample2_form.atomos2.value = "#FF0000";
//colornum2の数だけカラースキーム2用のdiv要素を作成し配置する
    function defineScale2(){
        //var num = colornum2;
		if(scale2=="sequential"){
			$("#qual").css("visibility","hidden");
			
			
			
				$("#svg-fig2").css("visibility","visible");
				$("#svg-fig2").css("padding","10pt");
				$("#svg-fig2").css("width","200pt");
				$("#svg-fig2").css("height","200pt");
				$("#svg-fig3").css("visibility","visible");
				$("#svg-fig3").css("padding","10pt");
				$("#svg-fig3").css("width","250pt");
				$("#svg-fig3").css("height","220pt");
				after_nominal=false;
			
			document.getElementById("form2").innerHTML="";
			var form_element2 = document.createElement("div");
			var forminner = " ";
			forminner = "<form name=\"Sample2_form\" onsubmit=\"return false;\">\nTone of End points : <select name=\"atomos2\" onchange=\"changeAtomos2()\">\n<option value=\"#000000\">黒</option>\n<option value=\"#FFFFFF\">白</option>\n<option value=0>鮮やか</option>\n<option value=1>明るい</option>\n<option value=2>強い</option>\n<option value=3>深い</option>\n<option value=4>浅い</option>\n<option value=5>柔らか</option>\n<option value=6>くすんだ</option>\n<option value=7>暗い</option>\n<option value=8>薄い</option>\n<option value=9>明るい灰み</option>\n<option value=10>灰み</option>\n<option value=11>暗い灰み</option>\n</select><br>Number of Colors : <input type=\"number\" name=\"number2\" value=\""+colornum2+"\" onchange=\"changeNum2()\">\n</form>";
			form_element2.innerHTML = forminner;
			var form_object2 = document.getElementById("form2");
			form_object2.appendChild(form_element2);
		}else if(scale2=="qualitative"){
			after_nominal=true;
			
			//$("#qual").css("visibility","visible");
			/*
			$("#svg-fig3").css("padding","0pt");
			$("#svg-fig3").css("width","0%");
			$("#svg-fig3").css("height","0%");
			*/
			$("#svg-fig2").css("visibility","hidden");
			$("#svg-fig2").css("padding","0pt");
			$("#svg-fig2").css("width","0%");
			$("#svg-fig2").css("height","0%");
			$("#svg-fig3").css("visibility","hidden");
			$("#svg-fig3").css("padding","0pt");
			$("#svg-fig3").css("width","0%");
			$("#svg-fig3").css("height","0%");
			document.getElementById("form2").innerHTML="";
			var form_element2 = document.createElement("div");
			var forminner = " ";
			forminner = "<form name=\"Sample2_form\"><select name=\"atomos2\" onchange=\"changeAtomos2()\">\n<option value=\"#000000\">黒</option>\n<option value=\"#FFFFFF\">白</option>\n<option value=\"Vivid\">鮮やか</option>\n<option value=\"Bright\">明るい</option>\n<option value=\"Strong\">強い</option>\n<option value=\"Deep\">深い</option>\n<option value=\"Light\">浅い</option>\n<option value=\"Soft\">柔らか</option>\n<option value=\"Dull\">くすんだ</option>\n<option value=\"Dark\">暗い</option>\n<option value=\"Pale\">Pale</option>\n<option value=\"Ltg\">明るい灰み</option>\n<option value=\"Grayish\">灰み</option>\n<option value=\"Dkg\">暗い灰み</option>\n</select><br>Number of Colors : <input type=\"number\" name=\"number2\" value=\""+colornum2+"\" onchange=\"changeNum2()\"><input value=\"更新\" type=\"button\" onclick=\"makeQualitativeColorScheme()\"></form>";
			form_element2.innerHTML = forminner;
			var form_object2 = document.getElementById("form2");
			form_object2.appendChild(form_element2);
			//makeQualitativeColorScheme();	
		}else if(scale2=="diverging"){
				$("#svg-fig2").css("visibility","visible");
				$("#svg-fig2").css("padding","10pt");
				$("#svg-fig2").css("width","200pt");
				$("#svg-fig2").css("height","200pt");
				$("#svg-fig3").css("visibility","visible");
				$("#svg-fig3").css("padding","10pt");
				$("#svg-fig3").css("width","250pt");
				$("#svg-fig3").css("height","220pt");
			
				$("#qual").css("visibility","hidden");
			
				after_nominal=false;
			
			document.getElementById("form2").innerHTML="";
			var form_element2 = document.createElement("div");
			var forminner = " ";
			forminner = "<form name=\"Sample2_form\">\n<select name=\"atomos2\" onchange=\"changeAtomos2()\">\n<option value=\"#000000\">黒</option>\n<option value=\"#FFFFFF\">白</option>\n<option value=0>鮮やか</option>\n<option value=1>明るい</option>\n<option value=2>強い</option>\n<option value=3>深い</option>\n<option value=4>浅い</option>\n<option value=5>柔らか</option>\n<option value=6>くすんだ</option>\n<option value=7>暗い</option>\n<option value=8>薄い</option>\n<option value=9>明るい灰み</option>\n<option value=10>灰み</option>\n<option value=11>暗い灰み</option>\n</select><br>Number of Colors : <input type=\"number\" name=\"number2\" value=\""+colornum2+"\" onchange=\"changeNum2()\">\n</form>";
			form_element2.innerHTML = forminner;
			var form_object2 = document.getElementById("form2");
			form_object2.appendChild(form_element2);
		}
		
		makedivelements();
    }


//最初に必要数のdiv要素を構築する関数
function Sample2(){
        //var num = colornum2;
		//defineScale2();
		makedivelements();
    }

//カラースキームを配置するdiv要素を生成する
function makedivelements(){
	var atoms=0;
	if(coloratomos2=="#000000"){
		atoms = 13;
	}else if(coloratomos2=="#FFFFFF"){
		atoms = 12;
	}else{
		atoms = coloratomos2;
	}
	document.getElementById("colorscheme2").innerHTML="";
    var div_element2 = document.createElement("div");
	//div_element2.setAttribute("style","margin:0px");
	//innerHTMLの初期化
    var innerStr = " ";
	for(var j=0; j<12; j++){
		for(var i=0; i<colornum2; i++){
			//作成する色の数だけid=color2nの箱を作成し、配置する。
			innerStr = innerStr+("<div id=\""+j+"FirstColorScheme2"+i+"\" class=\"scheme2\">"+" "+"</div>");
		}
		if(j==0){
			innerStr = innerStr+"<div class=\"tonename\"><input type=\"radio\" name=\"selectedtone\" value="+j+" checked onchange=\"changeRadio(value)\"></div>";
		}else{
			innerStr = innerStr+"<div class=\"tonename\"><input type=\"radio\" name=\"selectedtone\" value="+j+" onchange=\"changeRadio(value)\"></div>";
		}
		innerStr = innerStr+"<div class=\"tonename hint--right \" data-hint=\""+toneimage[j]+"\" id=\""+tonename[j]+"label\">"+tonename[j]+" → "+tonename[atoms]+"</div>";
		innerStr = innerStr+"<br>"
	}
	innerStr = innerStr+"</table>"
    div_element2.innerHTML = innerStr;
    var object2 = document.getElementById("colorscheme2");
    object2.appendChild(div_element2);
	if(scale2=="sequential"){
		clickedColor2="rgb(238,0,38)";
		var return_Lab = RGB2Lab(clickedColor2);
		for(var i=0; i<12; i++){
			var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS,i,id);
		}
	}else if(scale2=="diverging"){
		clickedColor2="rgb(238,0,38)";
		//redColor2();
		//redColor3();
		//coloratomos2=Sample2_form.atomos2.value;
		var return_Lab1 = RGB2Lab(clickedColor2);
		var return_Lab2 = RGB2Lab(clickedColor2);
		for(var i=0; i<12; i++){
			makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS,i,id);
			}
	}
	/*
	if(scale2!="qualitative"){
	document.getElementById("colorscheme2").innerHTML="";
        var div_element2 = document.createElement("div");
		//div_element2.setAttribute("style","margin:0px");
		//innerHTMLの初期化
        var innerStr = " ";
		for(var j=0; j<12; j++){
			for(var i=0; i<colornum2; i++){
				//作成する色の数だけid=color2nの箱を作成し、配置する。
				innerStr = innerStr+("<div id=\""+j+"FirstColorScheme2"+i+"\" class=\"scheme2\">"+" "+"</div>");
			}
			if(j==0){
				innerStr = innerStr+"<div class=\"tonename\"><input type=\"radio\" name=\"selectedtone\" value="+j+" checked onchange=\"changeRadio(value)\"></div>";
			}else{
				innerStr = innerStr+"<div class=\"tonename\"><input type=\"radio\" name=\"selectedtone\" value="+j+" onchange=\"changeRadio(value)\"></div>";
			}
			innerStr = innerStr+"<div class=\"tonename hint--right \" data-hint=\""+toneimage[j]+"\" id=\""+tonename[j]+"label\">"+tonename[j]+" → "+tonename[atoms]+"</div>";
			innerStr = innerStr+"<br>"
		}
		innerStr = innerStr+"</table>"
        div_element2.innerHTML = innerStr;
        var object2 = document.getElementById("colorscheme2");
        object2.appendChild(div_element2);
		
		
		if(scale2=="sequential"){
			clickedColor2="rgb(238,0,38)";
			//redColor2();
			//coloratomos2="#000000";
			var return_Lab = RGB2Lab(clickedColor2);
			for(var i=0; i<12; i++){
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS,i,id);
			}
		}else if(scale2=="diverging"){
			clickedColor2="rgb(238,0,38)";
			//redColor2();
			//redColor3();
			//coloratomos2=Sample2_form.atomos2.value;
			var return_Lab1 = RGB2Lab(clickedColor2);
			var return_Lab2 = RGB2Lab(clickedColor2);
			for(var i=0; i<12; i++){
				makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS,i,id);
			}
		}
	}else{
		document.getElementById("qual").innerHTML="<br>";
        var div_element2 = document.createElement("div");
		//div_element2.setAttribute("style","margin:0px");
		//innerHTMLの初期化
        var innerStr = " ";
			for(var i=0; i<colornum2; i++){
				//作成する色の数だけid=color2nの箱を作成し、配置する。
				innerStr = innerStr+("<div id=\"qualColorScheme2"+i+"\" class=\"scheme2\">"+" "+"</div>");
			}
        div_element2.innerHTML = innerStr;
        var object2 = document.getElementById("qual");
        object2.appendChild(div_element2);
	}
	*/
}



/*

function reLoading(){
	var fig = document.getElementById('svg-fig2').contentDocument;
       $fig = $(fig);
       $Vivid2 = $fig.find("#Vivid2 circle");$Bright2 = $fig.find("#Bright2 circle");
       $Strong2 = $fig.find("#Strong2 circle");$Deep2 = $fig.find("#Deep2 circle");
       $Light2 = $fig.find("#Light2 circle");$Soft2 = $fig.find("#Soft2 circle");
       $Dull2 = $fig.find("#Dull2 circle");$Dark2 = $fig.find("#Dark2 circle");
       $Pale2 = $fig.find("#Pale2 circle");$Ltg2 = $fig.find("#Ltg2 circle");
       $Grayish2 = $fig.find("#Grayish2 circle");$Dkg2 = $fig.find("#Dkg2 circle");
       $selectedcolor2 = $fig.find("#selectedcircle2 rect");
		$White2 = $fig.find("#White2 circle");
		$Black2 = $fig.find("#Black2 circle");
		$White2.click(function(){var circlecolor = $(this).css("fill");
			if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
		$Black2.click(function(){var circlecolor = $(this).css("fill");
			if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
		
        $Vivid2.click(function(){var circlecolor = $(this).css("fill");
			if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Bright2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Strong2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Deep2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Light2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Soft2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Dull2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Dark2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Pale2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Ltg2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Grayish2.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Dkg2.click(function(){var circlecolor = $(this).css("fill");
			if(scale2=="sequential"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor2 = circlecolor;
				$selectedcolor2.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
	
	
	//ページ読み込み時の初期化
		defineScale2();
        var hogehoge = "EE0026";//リストから色を取得
        switch(hogehoge){
            case "#EE0026":
            redColor2();
            break;
        }
		maincolor=hogehoge;
		coloratomos2="#000000";
		var return_Lab = RGB2Lab(clickedColor2);
		var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
}

/*

function reLoadingDiverging(){
	var fig = document.getElementById('svg-fig3').contentDocument;
       $fig3 = $(fig);
       $Vivid3 = $fig3.find("#Vivid3 circle");$Bright3 = $fig3.find("#Bright3 circle");
       $Strong3 = $fig3.find("#Strong3 circle");$Deep3 = $fig3.find("#Deep3 circle");
       $Light3 = $fig3.find("#Light3 circle");$Soft3 = $fig3.find("#Soft3 circle");
       $Dull3 = $fig3.find("#Dull3 circle");$Dark3 = $fig3.find("#Dark3 circle");
       $Pale3 = $fig3.find("#Pale3 circle");$Ltg3 = $fig3.find("#Ltg3 circle");
       $Grayish3 = $fig3.find("#Grayish3 circle");$Dkg3 = $fig3.find("#Dkg3 circle");
       $selectedcolor3 = $fig3.find("#selectedcircle3 rect");
		$White3 = $fig3.find("#White3 circle");
		$Black3 = $fig3.find("#Black3 circle");
	
		$White3.click(function(){var circlecolor = $(this).css("fill");
			if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
		$Black3.click(function(){var circlecolor = $(this).css("fill");
			if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
		
        $Vivid3.click(function(){var circlecolor = $(this).css("fill");
			if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Bright3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Strong3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Deep3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Light3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Soft3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Dull3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Dark3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Pale3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Ltg3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Grayish3.click(function(){var circlecolor = $(this).css("fill");
           if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
        $Dkg3.click(function(){var circlecolor = $(this).css("fill");
			if(scale2=="sequential"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab = RGB2Lab(circlecolor);
				var colorScheme = makeColorScheme2(return_Lab.LS,return_Lab.aS,return_Lab.bS);
			}else if(scale2=="diverging"){
				clickedColor3 = circlecolor;
				$selectedcolor3.css({"fill": circlecolor});
				var return_Lab1 = RGB2Lab(clickedColor2);
				var return_Lab2 = RGB2Lab(clickedColor3);
				var colorScheme = makeDivergingColorScheme2(return_Lab1.LS,return_Lab1.aS,return_Lab1.bS,return_Lab2.LS,return_Lab2.aS,return_Lab2.bS);
			}
        });
	
}
*/