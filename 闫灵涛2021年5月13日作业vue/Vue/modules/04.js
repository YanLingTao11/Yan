// 引入vue
import Vue from 'vue';
// 构建应用
let app = new Vue({
    // 视图
    el: '#app',
    // 模型
    data: {
        title: 'hello',
        books: ['这本书能够让你戒烟', '追风筝的人', '论语'],
        person: {
            name: '张三',
            sex: '男'
        },
        xxoo: ''
    }
})

// 修改普通值
// app.title = 'i love you';

//数组中的基础值类型
// app.books[1] = '道德经';
//更新整个数组
// app.books = ['这本书能够让你戒烟', '道德经', '论语']

//数组中新增的值
// app.books.push('鬼谷子');
// app.books[3] = '鬼谷子';

// 对象新增的属性
// app.person.age = 18;  //没有用
//更新整个对象
// app.person = {
//     name: '张三',
//     sex: '男',
//     age: 11
// }

// 未初始化的数据
// app.xxoo = 'ooxx';

//使用set方法
app.$set(app.books, 3, '这本书能让你快乐');
app.$set(app.person, 'age', 22);
console.log(app);