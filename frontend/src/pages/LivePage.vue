<template>
  <div>
    text : {{ url }}
    <video width="100%" id="live" controls></video>
  </div>
</template>

<script>
export default {
  computed: {
    url: function () {
      return this.$route.params.url;
    },
  },
};
</script>

<style></style>