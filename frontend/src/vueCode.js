
// eslint-disable-next-line
/* eslint-disable */

var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 Vue!'
  }
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: '안녕하세요! Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

new Vue({
  el: "#appVideo",
});

var video = document.getElementById('video-container');

video.src = "https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8";
video.play();