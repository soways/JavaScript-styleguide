/**
 * Created by ds_wuxl on 2016/1/11.
 * @description 使用大写名称，并适当加上@const注释（如果名称已经体现就不用添加了），不要使用const关键字.
 */

//对于基本类型的常量, 只需转换命名.
/**
 * The user name .
 * @type {string}
 */
var USER_NAME = "zhangs";
function checkName(userName){
    //存在函数参数 userName 以及全局变量 USER_NAME ,如果要比较两个值是否相等，必需写为
    return window.USER_NAME == userName ;//使用了全局变量的前缀
}

//对于非基本类型, 使用 @const 标记.
/**
 * The number of seconds in each of the given units.
 * @type {Object.<number>}
 * @const
 */
var SECONDS_TABLE = {
    minute: 60,
    hour: 60 * 60,
    day: 60 * 60 * 24
}
//这标记告诉编译器它是常量.
//至于关键词 const, 因为 IE 不能识别, 所以不要使用.

