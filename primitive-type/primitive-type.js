/**
 * Created by ds_wuxl on 2016/1/11.
 * @description 原生类型不要使用包装对象的构造函数来进行声明，但是可以用来进行类型转换。
 */


//没有任何理由去封装基本类型, 另外还存在一些风险:

var x = new Boolean(false);
if (x) {
    alert('hi');  // Shows 'hi'.
}
//除非明确用于类型转换, 其他情况请千万不要这样做！

var x = Boolean(0);
if (x) {
    alert('hi');  // This will never be alerted.
}
typeof Boolean(0) == 'boolean';
typeof new Boolean(0) == 'object';
//有时用作 number, string 或 boolean时, 类型的转换会非常实用.