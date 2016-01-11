/**
 * Created by ds_wuxl on 2016/1/11.
 *  声明变量必须加上 var 关键字.
 * @description 当你没有写 var, 变量就会暴露在全局上下文中, 这样很可能会和现有变量冲突.
 * 另外, 如果没有加上, 很难明确该变量的作用域是什么, 变量也很可能像在局部作用域中, 很轻易地泄漏到 Document 或者 Window 中, 所以务必用 var 去声明变量.
 */
function variablesVar(){
    a="123";
}
variablesVar();//执行一次variablesVar
console.log(a);//可以看到"123"

function variables(){
    var b="123";
}
variables();//执行一次variables
console.log(b);//出错,b is not defined,因为variables中声明的变量作用域只是 variables 函数.