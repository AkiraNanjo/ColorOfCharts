function drawchart(dataset){
	
	/*
	var dataset = [
		pi1,
		{legend:"orange", value:45, color:"orangered"},
		{legend:"banana", value:25, color:"yellow"},
		{legend:"peach", value:70, color:"pink"},
		{legend:"grape", value:20, color:"purple"}
		];*/
	
	/*
	
*/
	
	if(selectedchart=="circle"){
		document.getElementById("chartplace").innerHTML=" ";
		var width = 250;
		var height = 250;
		var radius = 100;
		var svg = d3.select("#chartplace").append("svg")
			.attr("width", width)
			.attr("height", height)
			.attr("id", "chart")
			.append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var arc = d3.arc()
			.outerRadius(radius)
			.innerRadius(0);

		var pie = d3.pie()
			.sort(null)
			.value(function(d){ return d.value; });
		/*
		.attr("fill", function(d){ return d.data.color; });
		*/
		svg.append("circle")
		.attr("r",100)
		.attr("fill","white")
		.attr("stroke-width",3)
		.attr("stroke","black");
		var g = svg.selectAll(".fan")
			.data(pie(dataset))
			.enter()
			.append("g")
			.attr("class", "fan");
		g.append("path")
		.attr("d", arc)
		.attr("fill", function(d){ return d.data.color; });
	}else if(selectedchart=="bar"){
		document.getElementById("chartplace").innerHTML=" ";
		var list = dataset;
		//var list = [10, 30, 5, 60, 40, 78, 56, 30, 24, 80];
		var svgWidth = 640; // SVG領域の横幅
		var svgHeight = 600;    // SVG領域の縦幅
		var barHeight = 180;    // 棒グラフの基準位置
		d3.select("#chartplace").append("svg")
		.attr("width", svgWidth).attr("height", svgHeight)
		.selectAll("rect")  // SVGでの四角形を示す要素を指定
		.data(list) // データを設定
		.enter()
		.append("rect") // SVGでの四角形を示す要素を生成
		.attr("x", function(d,i){   // X座標を配列の順序に応じて計算
			return i * 30;
		})
		.attr("y", function(d){ // 縦幅を配列の内容に応じて計算
			return barHeight-(d.value*10)+50 +"px";
		})
		.attr("height", function(d){    // 縦幅を配列の内容に応じて計算
			return (d.value*10) +"px";
		})
		.attr("width", 30)  // 棒グラフの横幅を指定
		.attr("fill",function(d){
			return d.color;
		}); // 棒グラフの色を赤色に設定
	}
	
	checkbackgroundcolor();
}


