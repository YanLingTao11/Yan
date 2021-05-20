import Vue from 'vue';
import '../scss/11.scss';

let app = new Vue({
    el: "#app",
    data: {
        nums: [1, 2, 3, 4, 5],
    },
    methods: {
        toggle() {
            this.nums = this.nums.sort(() => Math.random() > 0.5 ? -1 : 1)
        },
        add() {
            let num = this.nums.length + 1;
            this.nums.splice(this.getIndex(), 0, num);
        },
        getIndex() {
            return Math.round(Math.random() * this.nums.length);
        }
    }
})