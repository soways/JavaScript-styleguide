/**
 * Created by ds_wuxl on 2016/1/11.
 * @description 总是使用分号
 * 如果仅依靠语句间的隐式分隔, 有时会很麻烦. 你自己更能清楚哪里是语句的起止.
 * 而且有些情况下, 漏掉分号会很危险:
 */

//不加分号 example
var testA=function(a){
    console.log(a)
    return function(c){
        console.log(c)
    }
}(function(b){
    console.log(b)
})(1)
//语句会解释成, test 函数带一匿名函数作为参数而被调用,
//打印
//function (b){
//    console.log(b)
//}
//, 又一次被"调用"输出"1", 这就导致了错误

//加分号 example
var tesB =function(a){
    console.log(a)
    return function(c){
        console.log(c)
    }
};(function(b){
    console.log(b)
})(1)
tesB("2")("3")
//输出1,2,3
