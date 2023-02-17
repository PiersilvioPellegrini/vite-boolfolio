<template>
  <div class="card-deck">
    <div class="card">
      <div v-if="project.img_cover">
        <img
          class="card-img-top"
          :src="backendUrl + '/storage/' + project.img_cover"
          alt="Card image cap"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <router-link
            :to="{ name: 'projects.show', params: { id: project.id } }"
            >{{ project.name }}</router-link
          >
        </h5>
        <p class="card-text">
          {{ project.description }}
        </p>
        <p class="card-text">
          <small class="text-muted">Type_Id{{ project.type_id }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheProjectCard",
  props: ["project"],

  data(){
    return{
      backendUrl:"http://127.0.0.1:8000"
    }
}


}
</script>
