<template>
  <v-layout fill-height wrap>
    <v-layout>
    </v-layout>
    <v-flex xs12>
      <Tasks/>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Tasks from "@/components/Trello/Tasks.vue";

export default {
  components: {
    Logo,
    Tasks
  }
}
</script>
