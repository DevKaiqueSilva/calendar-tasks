<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="dateBR"
        @focus="onFocus"
        v-mask="'##/##/####'"
        :background-color="backgroundColor"
        :color="color"
        :placeholder="placeholder"
        :rounded="rounded"
        :disabled="!!disabled ? disabled : false"
        @keyup="changeText"
        :label="label"
        :filled="filled"
        :rules="rules"
        :outlined="outlined"
        prepend-inner-icon="mdi-calendar"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      no-title
      locale="PT-BR"
      v-model="dateEU"
      @change="changeDate"
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>
<script>
import { mask } from "vue-the-mask";
export default {
  directives: {
    mask,
  },
  props: [
    "date",
    "rounded",
    "placeholder",
    "backgroundColor",
    "outlined",
    "filled",
    "color",
    "label",
    "rules",
    "disabled",
  ],
  data() {
    return {
      menu: false,
      dateBR: "",
      dateEU: "",
    };
  },
  created() {
    this.dateEU = this.date;
    this.dateBR = this.date.split("-").reverse().join("/");
  },
  methods: {
    changeDate() {
      console.log("ChangeDate");
      let date = this.dateEU;
      this.$emit("resetarDate", date);
      this.dateBR = date.split("-").reverse().join("/");
    },
    changeText() {
      // console.log("changeText");
      if (this.dateBR.length == 10) {
        this.dateEU = this.dateBR.split("/").reverse().join("-");
        let date = this.dateEU;
        this.$emit("resetarDate", date);
      }
    },
    onFocus() {},
  },
  computed: {
    dateFormated() {
      if (this.date.length == 10) {
        return this.date.split("-").reverse().join("/");
      } else {
        return this.date;
      }
    },
  },
};
</script>