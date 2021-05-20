import Vue from 'vue';
import './06.scss';

let app = new Vue({
    el: '#app',
    data: {
        title: '<b>hello EveryBodys</b>'
    }
})

setTimeout(() => {
    app.title = '我爱你们❤❤❤';
}, 2000)