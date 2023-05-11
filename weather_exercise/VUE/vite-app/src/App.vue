<template>
  <div>
    <Likes />
    <HelloWorld />
  </div>
</template>

<script>
import Likes from "./components/Likes.vue";
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    Likes,
    HelloWorld,
  },
};
</script>
