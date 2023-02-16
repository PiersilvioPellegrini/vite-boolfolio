<script>
import axios from "axios";
import TheProjectCard from "../../components/TheProjectCard.vue";

export default{
    components: { TheProjectCard },
    name: "ProjectsIndex",
    data() {
        return {
            backendUrl: "http://127.0.0.1:8000",
            projects: [],
        };
    },
    methods: {
        fetchProjects() {
            axios.get(this.backendUrl + "/api/projects").then((resp) => {
                // console.log(resp.data);
                this.projects  = resp.data.data;
            });
        },
    },
    mounted() {
        this.fetchProjects();
    },
}

</script>

<template>
<div class="container">
    <h1 class="mt-5">I TUOI PROGETTI</h1>

    <TheProjectCard :project="project"  v-for="project in projects" :key="project.id"></TheProjectCard>
</div>
</template>
