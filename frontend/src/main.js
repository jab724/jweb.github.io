// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';

import { IndexPage, LivePage, VodPage } from './pages';

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
  {
    path: '/',
    component: IndexPage
  },
  {
    path: '/Live/:url',
    component: LivePage
  },
  {
    path: '/Vod/:num',
    component: VodPage
  }
];

// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router // router 추가
}).$mount('#app')

new Vue({
  el: '#CustomLiveUrl',
  data: {
    LiveUrl: 'testest'
  }
})

var vod1 = document.getElementById('vod1');
vod1.src = "http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4";
vod1.play();
var vod2 = document.getElementById('vod2');
vod2.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
vod2.play();
var vod3 = document.getElementById('vod3');
vod3.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";
vod3.play();
var vod4 = document.getElementById('vod4');
vod4.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
vod4.play();
var vod5 = document.getElementById('vod5');
vod5.src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
vod5.play();

var live = document.getElementById('live');
live.src = "";//"https://DKI_Holo1:1234567@192.168.0.85/api/holographic/stream/live.mp4?holo=true&pv=true&mic=false&loopback=false&RenderFromCamera=false";
live.play();