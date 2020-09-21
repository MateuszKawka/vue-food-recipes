<template>
  <div id="app">
    <notifications group="notification" position="top left" classes="notification" width='100%'/>
    <Menu />
    <Loader />
    <transition
        name="fade"
        mode="out-in"
      >
    <router-view class="mb-5" />
    </transition>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Loader from "@/components/Loader";
export default {
  components: {
    Menu,
    Loader
  },
};
</script>

<style lang="scss">
.notification {
  width: 100%;
  background: $details-color;
  color: $light-text;
  border-radius: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
