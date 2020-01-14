<template>
  <div class="container">
    <h2>Create Idea</h2>
    <form @submit.prevent="create">
      <label for="idea-title">Idea's title</label>
      <br />
      <input class="form-control" type="text" id="idea-title" v-model="title" />
      <button type="submit" class="btn btn-sm btn-success mt-2">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "IdeaCreate",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    create() {
      const idea = {
        createAt: new Date(),
        title: this.title
      };
      //this.$store.commit("CREATE_IDEAS", idea);
      this.$store.dispatch("createIdea", idea);
      this.title = "";
    }
  }
};
</script>

<style scoped></style>
