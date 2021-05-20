import Vue from 'vue';
import '../scss/09.scss';

let app = new Vue({
    el: '#app',
    data: {
        flag: true
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    }
})