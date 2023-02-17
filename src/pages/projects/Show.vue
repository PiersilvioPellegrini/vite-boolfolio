<script>
import axios from "axios";
import TheProjectCard from "../../components/TheProjectCard.vue";

export default {
  components: { TheProjectCard },
  name: "ProjectsShow",
  data() {
    return {
      backendUrl: "http://127.0.0.1:8000",
      project: {},
    };
  },
  mounted() {
    axios
      .get(this.backendUrl + "/api/projects/" + this.$route.params.id)

      .then((resp) => {
        // console.log(resp.data);
        this.project = resp.data;
      })
      .catch((er) => {
        // in caso di errore non ha senso che l'utente rimanga qui
        // faccio un redirect su posts.index
        this.$router.push({ name: "projects.index" });
      });
    
  },
};
</script>

<template>
  <TheProjectCard  :project="project" v-if="project.id"></TheProjectCard>
</template>
