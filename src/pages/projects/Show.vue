<script>
import axios from "axios";
import TheProjectCard from "../../components/TheProjectCard.vue";

export default {
  name: "ProjectsShow",
  data() {
    return {
      backendUrl: "",
      project: {},
    };
  },
  mounted() {
    axios
      .get(this.backendUrl + "/api/projects/" + this.$route.params.id)
      
      .then((resp) => {
        this.projects = resp.data;
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
 <TheProjectCard></TheProjectCard>
  
</template>