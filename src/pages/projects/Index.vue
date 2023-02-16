<script>
import axios from "axios";
import TheProjectCard from "../../components/TheProjectCard.vue";

export default{
    name: "ProjectsIndex",
    data() {
        return {
            backendUrl: "",
            projects: [],
        };
    },
    methods: {
        fetchProjects() {
            axios.get(this.backendUrl + "/api/projects").then((resp) => {
                this.projets = resp.data;
            });
        },
    },
    mounted() {
        this.fetchPosts();
    },
    components: { TheProjectCard }
}

</script>

<template>
<div class="container">
    <h1>I TUOI PROGETTI</h1>

    <TheProjectCard  v-for="project in projects" :key="project.id"></TheProjectCard>
</div>
</template>
