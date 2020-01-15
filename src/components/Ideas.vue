<template>
  <div>
    <div>
      <h1>Ideas</h1>
      <draggable v-model="allIdeas" class="ideas" group="ideas">
        <Idea v-for="idea in allIdeas" :key="idea.id" :item="idea" />
      </draggable>
    </div>
    <div class="destination">
      <div>
        <h1>Courses</h1>
        <draggable v-model="courses" class="ideas" group="ideas">
          <Idea v-for="course in courses" :key="course.id" :item="course" />
        </draggable>
      </div>
      <div>
        <h1>Paper work</h1>
        <draggable v-model="paperwork" class="ideas" group="ideas">
          <Idea v-for="pw in paperwork" :key="pw.id" :item="pw" />
        </draggable>
      </div>
    </div>
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
    //allIdeas() {
    allIdeas: {
      //return this.$store.getters.allIdeas;
      get() {
        return this.$store.getters.allIdeas;
      },
      set(value) {
        return this.$store.dispatch("saveIdeasOrdering", value);
      }
    },
    courses: {
      get() {
        return this.$store.getters.courses;
      },
      set(value) {
        return this.$store.dispatch("saveCoursesOrdering", value);
      }
    },
    paperwork: {
      get() {
        return this.$store.getters.paperwork;
      },
      set(value) {
        return this.$store.dispatch("savePaperWorkOrdering", value);
      }
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
.ideas {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
.destination {
  display: flex;
  justify-content: space-evenly;
}
</style>
