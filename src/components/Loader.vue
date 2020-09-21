<template>
  <div class="loader-container" v-if="isLoading">
    <div id="loading"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style scoped>
.loader-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

#loading {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(224, 96, 126, 0.6);
  border-radius: 50%;
  border-top-color: rgb(224, 96, 126);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>