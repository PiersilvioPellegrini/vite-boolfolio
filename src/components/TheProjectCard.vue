<template>
  <div class="card-deck">
    <div class="card">
      <div v-if="post.img_cover">
        <img
          class="card-img-top"
          :src="backedUrl + '/storage/' + project.cover_img"
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
          <small class="text-muted">{{ project.type_id }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>
