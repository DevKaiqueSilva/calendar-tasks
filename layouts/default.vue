<template>
  <v-app style="overflow-x:hidden">
    <Toolbar/>
    <MessageConfirm/>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import MessageConfirm from "@/components/UI/MessageConfirm.vue";
import Toolbar from "@/components/Navigation/Toolbar.vue";
export default {
  components:{
    Toolbar,
    MessageConfirm
  },
  data () {
    return {
    }
  }
}
</script>
