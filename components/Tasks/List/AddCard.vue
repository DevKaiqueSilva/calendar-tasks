<template>
    <v-card color="transparent" flat tile>
        <v-textarea solo rows="3" auto-grow v-model="title"
        @keyup.enter="onAddCard" placeholder="Insira o título do cartão.."
        background-color="white" ref="cardTitle" dense hide-details/>
        <v-layout class="mt-2">
            <v-btn height="30" color="green" class="white--text" @click="onAddCard">
                ADICIONAR
            </v-btn>
            <v-btn height="30" text color="white" @click="$emit('onClose')">
                <v-icon size="25">mdi-close</v-icon>
            </v-btn>
        </v-layout>
    </v-card>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    props:{
        cards:{
            type: Array,
            default: []
        }
    },
    data() {
        return {
            title: "",
        };
    },
    created() {
        this.title = "";
        setTimeout(() => {
            this.$refs.cardTitle.focus();
        }, 500);
    },
    methods: {
        onAddCard() {
            let obj = {
                id: this.cards.length+1,
                titulo: this.title.trim(),
                descricao: "",
                ordem: this.cards.length + 1,
                deliveryDate: null,
                createdAt: moment().format().substring(0,16),
                comentario: [],
                etiqueta: [],
                checklist: [],
            };
            this.$emit("onAddCard", obj);
            this.$emit("onClose");
        },
    },
};
</script>

