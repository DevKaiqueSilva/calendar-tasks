<template>
    <v-menu v-model="menu" offset-y :nudge-width="130" :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"
                class="my-2 elevation-0" small height="33"
                block color="rgba(0,0,0,0.2)"
            >
                <v-icon size="20" class="mr-2">mdi-tag-outline</v-icon>Etiquetas
            </v-btn>
        </template>
        <v-card class="pa-2">
            <v-layout style="color:#424242" class="my-1" align-center justify-space-between>
                <div/>
                Etiquetas
                <v-btn tile @click="menu=false" class="elevation-0"
                color="transparent" fab width="20" height="20"
                >
                    <v-icon color="#424242" size="20">mdi-close</v-icon>
                </v-btn>
            </v-layout>
            <v-divider />
            <div class="my-2">
                <v-card @click="$emit('onEtiqueta',item)"
                class="pa-2 my-2 font-weight-bold white--text"
                flat v-for="(item,i) in etiquetas" :key="i"
                :color="item.cor"
                >
                <v-layout align-center>
                    <div class="mt-1">{{item.titulo}}</div>
                    <v-icon class="pl-2" color="white"
                    v-if="card.etiqueta.filter(item2=>{return item2.titulo==item.titulo}).length>0"
                    >mdi-check-bold</v-icon>
                </v-layout>
                </v-card>
            </div>
        </v-card>
    </v-menu>
</template>
<script>
import axios from "axios";
export default {
    props: {
        card:{
            type: Object,
            required: true
        }
    },
    data() {
        return {
            menu: false,
            etiquetas: [],
        };
    },
    watch: {
        menu() {
            if (this.menu == false) {
            }
        },
    },
};
</script>