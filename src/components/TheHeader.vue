<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            
              <router-link :to="{ name: item.routeName }" class="nav-link">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          {
            label: "Home",
            routeName: "home",
          },
          {
            label: "Projects",
            routeName: "projects.index",
          },
          {
            label: "Chi Siamo",
            routeName: "about",
          },
          {
            label: "Contatti",
            routeName: "contacts",
          },
        ],
      };
    },
  };
 
</script>
  
  <style scoped lang="scss"></style>