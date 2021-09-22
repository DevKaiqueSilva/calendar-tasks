<template>
  <v-flex xs12 md4 lg3 class="pa-2">
    <v-btn block color="rgba(0,0,0,0.7)" class="white--text" height="40"
      @click="showAdd=true" style="text-transform:none;font-size:15px"
      v-if="showAdd==false"
    >
      <v-icon class="pr-1" color="white" size="24">mdi-plus</v-icon>Adicionar outra lista
    </v-btn>
    <v-card v-else :color="'#212121'" class="pa-2">
      <v-text-field solo @keyup.enter="onAddList"
        v-model="text" label="Insira o título da lista.."
        background-color="white" ref="titulo" dense hide-details
      />
      <v-layout class="mt-2">
        <v-btn height="30" color="green" class="white--text" @click="onAddList">ADICIONAR</v-btn>
        <v-btn height="30" text color="white" @click="showAdd=false">
          <v-icon size="25">mdi-close</v-icon>
        </v-btn>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
		lists:{
			type: Array,
			default:[]
		}
	},
  data() {
    return {
      text: "",
      showAdd: false,
    };
  },
  watch: {
    showAdd() {
      if (this.showAdd) {
        this.text = "";
        setTimeout(() => {
          this.$refs.titulo.focus();
        }, 500);
      }
    },
  },
  methods: {
    onAddList() {
      let obj = {
        title: this.text.trim(),
        order: this.lists.length + 1,
        cards: [],
      };
			this.$emit("onAddList",obj);
			this.text="";
			this.showAdd = false;
    },
  },
};
</script>
