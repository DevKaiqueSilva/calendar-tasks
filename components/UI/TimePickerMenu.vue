<template>
  <v-menu
    ref="menu"
    v-model="menu2"
    :close-on-content-click="false"
    :return-value.sync="time2"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="time2"
        :label="label"
        prepend-inner-icon="mdi-clock"
        readonly
        :placeholder="placeholder"
        :rules="rules"
        :background-color="backgroundColor"
        :outlined="outlined"
        :filled="filled"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker no-title v-if="menu2" v-model="time2" full-width @click:minute="changeTime"></v-time-picker>
  </v-menu>
</template>
<script>
export default {
  props: [
    "time",
    "label",
    "outlined",
    "filled",
    "backgroundColor",
    "rules",
    "placeholder",
  ],
  data() {
    return {
      menu2: false,
      time2: "",
    };
  },
  created() {
    this.time2 = this.time;
  },
  methods: {
    changeTime() {
      this.$emit("resetTime", this.time2);
      this.menu2 = false;
    },
  },
};
</script>