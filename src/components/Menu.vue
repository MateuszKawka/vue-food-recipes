<template>
  <nav>
    <router-link to="/"><BackIcon/></router-link>
    <router-link to="/"><HeartIcon/></router-link>
  </nav>
</template>

<script>
import HeartIcon from "vue-material-design-icons/Heart";
import BackIcon from "vue-material-design-icons/Backspace"

export default {
  name: "Menu",
  components: {
    HeartIcon,
    BackIcon
  }
}
</script>