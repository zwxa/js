/* 寻找数组元素位置*/
function indexOf(arr,item){
	if(Array.prototype.indexOf){
		return arr.indexOf(item);
	}else{
		for(var i =0;i<arr.length;i++){
			if(arr[i]===item){
				return i;
			}
		}
	}
	return -1;
}
/*数组求和*/
function sum(arr){
	var len = arr.length;
	if(len=0){
		return 0;
	}
	if(len = 1){
		return arr[0];
	}
	else{
		return arr[0]+sum.slice(1);
	}
	
}
/*移除数组中的元素*/
function remove(arr,item){
	var a =[];
	for (var i = arr.length; i++) {
		if(arr[i] != item;){
			a.push(arr[i]);
		}
		return a;	
	}
}
/*在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组。*/
function append(arr,item){
	return arr.concat(item);
}
/*删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组*/
function curtail(arr){
	return scile(1);
}
/*在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组*/
function inset(arr,index,item){
	return slice(0,index).concat(item,slice(index));
}
/*查找重复的元素*/
function duplicates(arr){
	//声明两个数组，a数组用来保存结果，b数组用来存放arr中每个元素的个数
	var a =[],
	      b=[];
	for(var i =0;i<arr.length;i++){
		if(!b[arr[i]]){
			b[arr[i]] =1;
			continue;
		}
		b[arr[i]]++;
	}
	for(var i =0;i<b.length;i++){
		if(b[i]>1){
			a.push(i)
		}
	}
}
/*格式化时间输出*/
function formatDate(t,str){
  var obj = {
    yyyy:t.getFullYear(),
    yy:(""+ t.getFullYear()).slice(-2),
    M:t.getMonth()+1,
    MM:("0"+ (t.getMonth()+1)).slice(-2),
    d:t.getDate(),
    dd:("0" + t.getDate()).slice(-2),
    H:t.getHours(),
    HH:("0" + t.getHours()).slice(-2),
    h:t.getHours() % 12,
    hh:("0"+t.getHours() % 12).slice(-2),
    m:t.getMinutes(),
    mm:("0" + t.getMinutes()).slice(-2),
    s:t.getSeconds(),
    ss:("0" + t.getSeconds()).slice(-2),
    w:['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
  };
  return str.replace(/([a-z]+)/ig,function($1){return obj[$1]});
}
/*颜色字符串转换rgb->16*/
function rgb2hex(sRGB) {
    var regexp=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    var ret=sRGB.match(regexp);
    if(!ret){
        return sRGB;
    }else{
        var str='#';
        for(var i=1;i<=3;i++){
            var m=parseInt(ret[i]);
            if(m<=255&&m>=0){
                str+=(m<16?'0'+m.toString(16):m.toString(16));
            }else{
                return sRGB;
            }
        }
        return str;
    }
}
/*item-list->itemList*/
function cssStyle2DomStyle(sName) {
    var arr = sName.split('');  
    //判断第一个是不是 '-'，是的话就删除 
    if(arr.indexOf('-') == 0)
        arr.splice(0,1);
   //处理剩余的'-'
    for(var i=0; i<arr.length; i++){
        if(arr[i] == '-'){
            arr.splice(i,1);
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}
/*实现函数 functionFunction，调用之后满足如下条件：

1、返回值为一个函数 f
2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
3、所有函数的参数数量为 1，且均为 String 类型*/
function functionFunction(str) {
  var f = function(s){
         return str+", "+s;
     }
     return f;
 }