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
 /*已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
1、返回一个函数 result，该函数接受一个参数
2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致*/
// 一般写法
function partial(fn, str1, str2) {
    function result(str3) {
        return fn(str1, str2, str3);
    }
 
    return result;
}
 
// call
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.call(this, str1, str2, str3);
    }
 
     return result;
}
 
// apply（这里只是为了对照）
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.apply(this, [str1, str2, str3]);
    }
 
    return result;
}
 
// 这个bind会生成一个新函数对象, 它的str1, str2参数都定死了, str3未传入, 一旦传入就会执行
function partial(fn, str1, str2) {
    return fn.bind(this, str1, str2); // 或 return fn.bind(null, str1, str2);
}
 
// bind同上, 多了一步, 把str3传入的过程写在另一个函数里面, 而另一个函数也有str1, str2参数
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.bind(this, str1, str2)(str3);
    }
 
    return result;
}
 
// 匿名函数
function partial(fn, str1, str2) {
    return function(str3) {
        return fn(str1, str2, str3);
    }
}
// ES6
const partial = (fn, str1, str2) => str3 => fn(str1, str2, str3);

/*实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数*/
//arguments不能用slice方法直接截取，需要先转换为数组，var args = Array.prototype.slice.call(arguments);合并参数可以使用concat方法，并且也需要将arguments先转换为数组才能使用concat进行合并。最用使用apply执行传入的函数即可。

function partialUsingArguments(fn) {
     //先获取p函数第一个参数之后的全部参数
     var args = Array.prototype.slice.call(arguments,1);
     //声明result函数
     var result = function(){
         //使用concat合并两个或多个数组中的元素
         return fn.apply(null, args.concat([].slice.call(arguments)));
     }
     return result;
 }
 /*已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
4、调用 c 之后，返回的结果与调用 fn 的返回值一致
5、fn 的参数依次为函数 a, b, c 的调用参数*/
function curryIt(fn) {
    var length = fn.length,
        args = [];
    var result =  function (arg){
        args.push(arg);
        length --;
        if(length <= 0 ){
            return fn.apply(this, args);
        } else {
            return result;
        }
    }    
    return result;
}

/*返回参数 a 和 b 的逻辑且运算结果。*/
function and(a, b) {
    return !!(a && b)
    //如果a为true，b为非Boolean就会返回非Boolean值，所以加一步转换
}
/*给定二进制字符串，将其换算成对应的十进制数字*/
function base10(str) {
    /**
        其它进制转十进制
        parseInt(str,2)
        parseInt(str,8)
        parseInt(str,16)
    */
    return parseInt(str,2);
}