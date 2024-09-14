


// var i = 1;

// function go(){
//     // 生成[1,14]之间的随机整数，再加14(至少绕一圈)
//     var num = parseInt(Math.random()*14+1)+14*2;
//     // 开启计时器
//     var timer = setInterval(function(){
//         num--;
//         // 停止计时器
//         if(num==0){
//             clearInterval(timer);
//         }
//         // 去除所有项的样式
//         var items = document.getElementsByClassName('item');
//         for(var item of items){
//             item.classList.remove('current');
//         }

//         // 设置当前选中项的样式
//         var item = document.getElementById('item'+i);
//         item.classList.add('current');
//         i++;
//         if(i>14){
//             i = 1;
//         }
//     },100);
// }

// var i = 1;

// function go() {
//     // 生成[1,14]之间的随机整数，再加14(至少绕一圈)
//     var num = parseInt(Math.random() * 14 + 1) + 14 * 2;
//     // 奖品对应的名称和图片路径
//     var prizes = {
//         1: { name: '月饼礼盒', img: 'images/mooncake.png' },
//         2: { name: '龙井茶套装', img: 'images/longjing_tea.png' },
//         3: { name: '葡萄酒', img: 'images/wine.png' },
//         4: { name: '礼品卡', img: 'images/gift_card.png' },
//         5: { name: '月兔挂机', img: 'images/moon_rabbit.png' },
//         6: { name: '精选书籍套装', img: 'images/books.png' },
//         7: { name: '茶具', img: 'images/tea_set.png' },
//         8: { name: '补品', img: 'images/supplements.png' },
//         9: { name: '插花', img: 'images/flower_arrangement.png' },
//         10: { name: '凤梨酥', img: 'images/pineapple_cake.png' },
//         11: { name: '巧克力', img: 'images/chocolate.png' },
//         12: { name: '水果葡萄', img: 'images/grapes.png' },
//         13: { name: '精选坚果', img: 'images/nuts.png' },
//         14: { name: '旅游套票', img: 'images/travel_tickets.png' } // 新增旅游套票
//     };

//     // 开启计时器
//     var timer = setInterval(function() {
//         num--;
//         // 停止计时器
//         if (num == 0) {
//             clearInterval(timer);

//             // 计算抽中的奖品
//             var prizeIndex = i - 1;
//             if (prizeIndex === 0) prizeIndex = 14; // 调整为奖品范围

//             // 获取奖品信息
//             var prize = prizes[prizeIndex];
            
//             // 弹出提示框并显示奖品的放大图
//             if (prize) {
//                 // 使用 alert 或其他方式弹出提示
//                 alert('恭喜你，抽中了：' + prize.name);

//                 // 动态显示奖品图片
//                 var prizeImage = document.createElement('img');
//                 prizeImage.src = prize.img;
//                 prizeImage.alt = prize.name;
//                 prizeImage.style.width = '200px'; // 调整图片大小
//                 prizeImage.style.height = '200px';

//                 // 在页面中显示奖品图
//                 var prizeContainer = document.getElementById('prizeContainer');
//                 prizeContainer.innerHTML = ''; // 清空之前的内容
//                 prizeContainer.appendChild(prizeImage);
//             }
//         }

//         // 去除所有项的样式
//         var items = document.getElementsByClassName('item');
//         for (var item of items) {
//             item.classList.remove('current');
//         }

//         // 设置当前选中项的样式
//         var item = document.getElementById('item' + i);
//         item.classList.add('current');
//         i++;
//         if (i > 14) {
//             i = 1;
//         }
//     }, 100);
// }

var i = 1;

function go() {
    // 生成[1,14]之间的随机整数，再加14(至少绕二圈)
    var num = parseInt(Math.random() * 14 + 1) + 14*2;
    // 奖品对应的名称和图片路径
    var prizes = {
        1: { name: '月饼礼盒', img: 'images/01.png' },
        2: { name: '龙井茶套装', img: 'images/02.png' },
        3: { name: '葡萄酒', img: 'images/03.png' },
        4: { name: '礼品卡', img: 'images/04.png' },
        5: { name: '月兔挂机', img: 'images/05.png' },
        6: { name: '精选书籍套装', img: 'images/06.png' },
        7: { name: '茶具', img: 'images/07.png' },
        8: { name: '补品', img: 'images/08.png' },
        9: { name: '插花', img: 'images/09.png' },
        10: { name: '凤梨酥', img: 'images/10.png' },
        11: { name: '巧克力', img: 'images/11.png' },
        12: { name: '水果葡萄', img: 'images/12.png' },
        13: { name: '精选坚果', img: 'images/13.png' },
        14: { name: '旅游套票', img: 'images/14.png' } // 新增旅游套票
    };

    // 开启计时器
    var timer = setInterval(function() {
        num--;
        // 停止计时器
        if (num == 0) {
            clearInterval(timer);

            // 计算抽中的奖品
            var prizeIndex = i;
            if (prizeIndex === 0) prizeIndex = 14; // 调整为奖品范围

            // 获取奖品信息
            var prize = prizes[prizeIndex];
            
            // 显示模态框并显示奖品的放大图
            if (prize) {
                // 设置模态框内容
                document.getElementById('modalText').textContent = '恭喜你，抽中了：' + prize.name;

                // 动态显示奖品图片
                var modalImageContainer = document.getElementById('modalImageContainer');
                modalImageContainer.innerHTML = ''; // 清空之前的内容
                var prizeImage = document.createElement('img');
                prizeImage.src = prize.img;
                prizeImage.alt = prize.name;
                modalImageContainer.appendChild(prizeImage);
				
                // 调试信息
                console.log('Attempting to load image:', prize.img);

                // 监听图片加载错误
                prizeImage.onerror = function() {
                    console.error('Image failed to load:', prize.img);
                };				
						

                // 显示模态框
                document.getElementById('modal').style.display = 'block';
            }
        }

        // 去除所有项的样式
        var items = document.getElementsByClassName('item');
        for (var item of items) {
            item.classList.remove('current');
        }

        // 设置当前选中项的样式
        var item = document.getElementById('item' + i);
        item.classList.add('current');
        i++;
        if (i > 14) {
            i = 1;
        }
    }, 100);
}

// 关闭模态框
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
