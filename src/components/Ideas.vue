<template>
  <div>
    <h2>Ideas</h2>
    <draggable>
      <Idea v-for="idea in allIdeas" :key="idea.id" :item="idea" />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Idea from "./Idea";

export default {
  name: "Ideas",
  components: {
    draggable,
    Idea
  },
  computed: {
    allIdeas() {
      return this.$store.getters.allIdeas;
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  cursor: pointer;
  padding: 5px;
}
</style>
