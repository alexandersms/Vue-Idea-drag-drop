<template>
  <div class="home container">
    <h1>Welcome to Ideas.io</h1>
    <IdeaCreate />
    <Ideas />
  </div>
</template>

<script>
// @ is an alias to /src
import IdeaCreate from "@/components/IdeaCreate.vue";
import Ideas from "@/components/Ideas.vue";

export default {
  name: "home",
  components: {
    IdeaCreate,
    Ideas
  }
};
</script>
