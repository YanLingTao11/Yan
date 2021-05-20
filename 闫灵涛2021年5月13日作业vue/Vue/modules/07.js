import Vue from 'vue';

Vue.filter('toUpper', (str) => {
    str = String(str);
    //必须有一个返回值
    return str.toUpperCase();
})

//构建应用
let app = new Vue({
    //视图
    el: '#app',
    data: {
        title: 'hello world'
    },
    filters: {
        toArray(str, split) {
            str = String(str);
            return str.split(split);
        }
    }
})