<template>
  <v-app style="overflow-x:hidden">
    <Toolbar/>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Navigation/Toolbar.vue";
export default {
  components:{
    Toolbar
  },
  data () {
    return {
    }
  }
}
</script>
