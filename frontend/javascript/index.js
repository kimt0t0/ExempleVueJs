var titleMain = new Vue({
    el: '#title-main',
    data: {
        title: 'Kim teste Vue.js !'
    }
})

var date = new Vue({
    el: "#date",
    data: {
        message: 'Nous sommes le' + new Date().toLocaleString()
    }
})