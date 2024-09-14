// js脚本文件，用来实现交互功能

/**
 * 定义变量
 */
var name = 'tom';
var age = 8;

// age++; // 自增1
// console.log(name); // 输出数据到控制台
// console.log(age);

/**
 * 条件判断
 */
// if(age>=18){
//     console.log('您已成年！');
// }else{
//     console.log('您未成年！');
// }

/**
 * 数组：一组数据
 */
var names = ['唐伯虎','秋香','石榴姐'];
// console.log(names);

/**
 * 循环
 */
// for(var name of names){
//     console.log(name);
// }

/**
 * 定义函数
 */
function print(){
    console.log(name);
    console.log(age);
}
// 调用函数
// print();
// print();

/**
 * 生成随机数
 */
// var x = Math.random(); // 生成一个[0,1)之间的随机小数
// var x = parseInt(Math.random()*100+1);  //  生成一个[1,100]之间的随机整数

// console.log(x);

/**
 * 计时器
 */
// setInterval(function(){
//     console.log(name);
//     console.log(age);
// },500); // 单位为毫秒  1秒=1000毫秒

var i = 1;
function start(){
    // 启动一个计时器
    var timer = setInterval(function(){
        console.log('嘿嘿'+i);
        i++;
        // 当i大于20时，停止计时器
        if(i>20){
            clearInterval(timer);
            console.log('计时器已停止。。。。');
        }
    },500);
}

/**
 * 页面DOM操作
 */
function change(){
    // 获取页面上的标签
    // var hello = document.getElementById('hello');
    // console.log(hello.classList);
    // hello.classList.add('a3');
    // hello.classList.remove('a1');

    var items = document.getElementsByClassName('aaa');
    for(var item of items){
        item.classList.add('a2');
    }

}