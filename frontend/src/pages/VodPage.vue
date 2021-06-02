<template>
  <div>
    text : {{ num }}
    <video width="100%" id="vod" controls autoplay></video>
  </div>
</template>

<script>
export default {
  computed: {
    num: function () {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>