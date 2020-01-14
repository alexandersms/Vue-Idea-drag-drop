<template>
  <div class="idea">
    <h3>{{ item.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Idea",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.idea {
  width: 200px;
  height: auto;
  border: 2px solid #fafafa;
  margin: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}
</style>
