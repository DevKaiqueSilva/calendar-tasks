<template>
    <v-menu v-model="menu" offset-y :nudge-width="130" :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"
                class="my-2 elevation-0" small height="33"
                block color="rgba(0,0,0,0.2)"
            >
                <v-icon size="20" class="mr-2">mdi-check-box-outline</v-icon>Checklist
            </v-btn>
        </template>
        <v-card class="pa-2">
            <v-layout style="color:#424242" class="my-1" align-center justify-space-between>
                <div/>
                Adicionar Checklist
                <v-btn tile @click="menu=false" class="elevation-0"
                color="transparent" fab width="20" height="20">
                    <v-icon color="#424242" size="20">mdi-close</v-icon>
                </v-btn>
            </v-layout>
            <v-divider />
            <div class="my-2">
                <span>Título</span>
                <v-text-field outlined @keyup.enter="addCheckList" autofocus
                v-model="title" dense hide-details background-color="#f1f1f1"
                filled placeholder="Título"
                />
                <v-btn class="mt-2 white--text" color="green"
                height="35" small @click="addCheckList">
                    ADICIONAR
                </v-btn>
            </div>
        </v-card>
    </v-menu>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            menu: false,
            title: "",
        };
    },
    methods: {
        addCheckList() {
            let obj = {
                title: this.title,
                list: [],
            };
            this.$emit("onAddChecklist", obj);
            this.menu = false;
        },
    },
    watch: {
        menu() {
            if (this.menu == false) {
                this.title = "";
            }
        },
    },
};
</script>