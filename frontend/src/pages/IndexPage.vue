<template>
  <div id="CustomLiveUrl">
    <video width="300px" id="live" controls autoplay></video>
    <input v-model="LiveUrl" />
    <router-link :to="'/Live/' + LiveUrl">Live 전체화면</router-link>
    <!-- <a href="Live">Live 전체화면</a> -->
    <video width="300px" id="vod" controls autoplay></video>
    <router-link to="/Vod">Vod 전체화면</router-link>
  </div>
</template>

<style></style>