import $ from 'jquery';
import './css/1.css';
import './css/1.less';
import './css/1.scss';

import Vue from 'vue';
//导入单文件组件
import App from './components/App.vue';

$(function() {
    $('li:odd').css('backgroundColor', 'orange')
    $('li:even').css('backgroundColor', 'pink')
})

class Person {
    static info = 'xz'
}

console.log(Person.info);

//====================vue使用步骤==========================

const vm = new Vue({
    el: "#app",
    //用render渲染组件
    render: h => h(App)
})