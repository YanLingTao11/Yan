import Vue from 'vue';

let app = new Vue({
    //绑定视图
    el: '#app',
    //数据
    data: {
        flag: 1
    },
    //方法
    methods: {
        toggle() {
            this.flag = (this.flag + 1) > 4 ? 1 : this.flag + 1;
        }
    }
})