//クリックした位置から取得したRGBをLabに変換する
function RGB2Lab(basecolor){
    var rgb = basecolor.replace("rgb(","");
    rgb = rgb.replace(")","");
    rgb = rgb.split(",");
    var sr=rgb[0]/255;
    var sg=rgb[1]/255;
    var sb=rgb[2]/255;
    var r=0;
    var g=0;
    var b=0;
	//sRGBの補正を取り除きをRGBへ変換
    if(sr<=0.040450){
		r = sr/12.92;
	}else{
		r = Math.pow(((sr+0.055)/1.055),2.4);
	}
	if(sg<=0.040450){
		g = sg/12.92;
	}else{
		g = Math.pow(((sg+0.055)/1.055),2.4);
	}
	if(sb<=0.040450){
		b = sb/12.92;
	}else{
		b = Math.pow(((sb+0.055)/1.055),2.4);
	}
    //標準光源はD50を想定
    var d50=[ 0.436041, 0.385113, 0.143046,
              0.222485, 0.716905, 0.060610,
              0.013920, 0.097067, 0.713913 ];
	
	//rgbをxyzへ変換
    var x = r*d50[0]+g*d50[1]+b*d50[2];
    var y = r*d50[3]+g*d50[4]+b*d50[5];
    var z = r*d50[6]+g*d50[7]+b*d50[8];
    
    var xn=0.9642;
    var yn=1.0;
    var zn=0.8249;
	var vals = 6/29;
	var valt = 29/3;
    var t_Xn = x/xn;
    var t_Yn = y/yn;
    var t_Zn = z/zn;
	var valFX,valFY,valFZ;
	
	if(t_Yn > vals*vals*vals){
    	valFY = Math.pow(t_Yn,1/3);
    } else {
    	valFY = (valt*valt*valt*t_Yn+16)/116;
    }
    if(t_Xn > vals*vals*vals){
    	valFX = Math.pow(t_Xn,1/3);
    } else {
    	valFX = (valt*valt*valt*t_Xn+16)/116;
    }
    if(t_Zn > vals*vals*vals){
    	valFZ = Math.pow(t_Zn,1/3);
    } else {
    	valFZ = (valt*valt*valt*t_Zn+16)/116;
    }
	
	var LStar = 116*valFY-16;
    var aStar = 500*(valFX-valFY);
    var bStar = 200*(valFY-valFZ);
	//Lab2RGB(LStar,aStar,bStar, xn, yn, zn);
	return {LS:LStar,aS:aStar,bS:bStar};
}

//LabからRGBへ変換する
function Lab2RGB (LS, aS, bS){
	var valXn=0.9642;
    var valYn=1.0;
    var valZn=0.8249;
	var valX, valY, valZ;
	var valt = 6/29;
	var vals = 3/29;
	var valfy = (LS+16)/116;
	var valfx = valfy+(aS/500);
	var valfz = valfy-(bS/200);
	
	if(valfy > valt){
    	valY = valfy*valfy*valfy*valYn;
    } else if(valfy <= valt){
    	valY = vals*vals*vals*(116*valfy-16)*valYn;
    }
    if(valfx > valt){
    	valX = valfx*valfx*valfx*valXn;
    } else if(valfx <= valt){
    	valX = vals*vals*vals*(116*valfx-16)*valXn;
    } 
    if(valfz > valt){
    	valZ = valfz*valfz*valfz*valZn;
    } else if(valfz <= valt){
    	valZ = vals*vals*vals*(116*valfz-16)*valZn;
    }
	
	var valR = 3.134187*valX - 1.617209*valY - 0.490694*valZ;
    var valG = -0.978749*valX + 1.916130*valY + 0.033433*valZ;
    var valB = 0.071964*valX - 0.228994*valY + 1.405754*valZ;
	
	if(valR <= 0.0031308){
    	valR = 12.92 * valR;
    } else if(valR > 0.0031308){
    	valR = 1.055 * Math.pow(valR,1/2.4) -0.055;
    }
    if(valG <= 0.0031308){
    	valG = 12.92 * valG;
    } else if(valG > 0.0031308){
    	valG = 1.055 * Math.pow(valG,1/2.4) -0.055;
    }
    if(valB <= 0.0031308){
    	valB = 12.92 * valB;
    } else if(valB > 0.0031308){
    	valB = 1.055 * Math.pow(valB,1/2.4) -0.055;
    }
	var RGB = [];
	if(valR > 255){
		valR = 255;
	}else{
		valR=Math.round(valR*255);
	}
	if(valG > 255){
		valG = 255;
	}else{
		valG=Math.round(valG*255);
	}
	if(valB > 255){
		valB = 255;
	}else{
		valB=Math.round(valB*255);
	}
	//RGB.push(valR);RGB.push(valG);RGB.push(valB);
	return {R:valR,G:valG,B:valB};
}

