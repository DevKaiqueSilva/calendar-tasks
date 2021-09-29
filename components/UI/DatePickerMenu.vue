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
        v-mask="!!range?'##/##/#### ~ ##/##/####':'##/##/####'"
        :background-color="backgroundColor"
        :color="color"
        :dense="dense"
        @keyup="changeText"
        placeholder="  /  /    "
        :label="label"
        :filled="filled"
        :rules="rules"
        :readonly="!!range?true:false"
        :hide-details="hideDetails"
        :outlined="outlined"
        prepend-inner-icon="mdi-calendar"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      no-title
      :min="min"
      :max="max"
      :range="!!range?range:false"
      locale="PT-BR"
      v-model="dateEU"
      @change="changeDate"
      @input="()=>{range==true?'':menu = false}"
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
    "backgroundColor",
    "outlined",
    "filled",
    "color",
    "label",
    "rules",
    "dense",
    "placeholder",
    "hideDetails",
    "min",
    "max",
    "range",
    "watch"
  ],
  data() {
    return {
      menu: false,
      dateBR: "",
      dateEU: "",
    };
  },
  created() {
    this.onInit();
  },
  watch:{
    date(){
      if(this.watch==true){
        this.onInit();
      }
    }
  },
  methods: {
    onInit(){
      this.dateEU = this.date;
      // console.log(this.date);
      if (!!this.date) {
        this.dateBR = this.dateFormated(this.date);//this.date.split("-").reverse().join("/");
        // console.log(this.dateBR)
      }
    },
    changeDate() {
      console.log("ChangeDate");
      let date = this.dateEU;
      this.$emit("resetarDate", date);
      this.dateBR = this.dateFormated(date);
    },
    changeText() {
      console.log("changeText");
      if (this.dateBR.length == 10) {
        this.dateEU = this.dateBR.split("/").reverse().join("-");
        let date = this.dateEU;
        this.$emit("resetarDate", date);
      }
    },
    dateFormated(date) {
      // console.log(this.range);
      if(!!this.range){
        // console.log(date);
        let dateBR = [];
        date.forEach(item=>{
          dateBR.push(item.split("-").reverse().join("/"));
        });
        // console.log(dateBR.join(" ~ "));
        return dateBR.join(" ~ ");
      }else{
          if (date.length == 10) {
          return date.split("-").reverse().join("/");
        } else {
          return date;
        }
      }
    },
    onFocus() {},
  },
  computed: {
    
  },
};
</script>