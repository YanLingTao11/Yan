import Vue from 'vue';

let app = new Vue({
    el: '#app',
    data: {
        num: 100,
        num1: 99,
        num2: 0,
        timer: null
    },
    watch: {
        num(...arg) {
            console.log(arg);
            console.log(this);
        },
        num1(newValue) {
            //清除上一次的定时器
            clearInterval(this.timer);
            newValue *= 1;

            this.timer = setInterval(() => {
                //判断是否相等
                if (this.num2 === newValue) {
                    //清除定时器
                    clearInterval(this.timer);
                    //初值后续代码执行
                    return;
                }
                this.num2 += this.num2 > newValue ? -1 : 1;
            }, 20)
        }
    }
})