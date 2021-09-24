<template>
    <v-card class="pa-4" color="#EEEEEE">
        <v-layout align-center>
            <v-icon size="25" color="#212121">mdi-card-bulleted</v-icon>
            <v-text-field :solo="titleEdit == false" style="color: #212121"
                @focus="titleEdit = true" :background-color="titleEdit ? 'white' : 'transparent'"
                hide-details :outlined="titleEdit" :flat="titleEdit == false" class="title"
                ref="titulo" dense placeholder="Título" @blur="onCard"
                @keyup.enter="$refs.titulo.blur()" v-model="item.titulo"
            />
            <v-btn @click="$emit('onClose')" text color="#424242">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-layout>
        <div style="margin-left: 40px; opacity: 0.7" class="body-2 font-weight-light">
            na lista {{ list.titulo }}
        </div>
        <v-card style="margin-left: 40px !important; width: fit-content"
        class="pa-1 ma-1 subtitle-2" flat v-if="item.DeliveryDate != null"
        color="rgba(0,0,0,0.15)" height="30">
            <v-layout style="opacity: 0.7" wrap>
                Date Entrega: {{ $format().date(item.DeliveryDate) }}
            </v-layout>
        </v-card>
        <v-layout wrap style="margin-left: 35px">
            <v-card class="pa-1 px-3 ma-1 font-weight-bold subtitle-2 white--text"
            flat height="30" v-for="(etq, i) in item.etiqueta" :key="i"
            :color="etq.cor">
                {{ etq.titulo }}
            </v-card>
        </v-layout>
        <v-layout wrap>
            <v-flex xs12 md8 lg9 class="pr-1">
                <v-layout align-center class="my-2">
                    <v-icon size="25" class="mr-4" color="#212121">mdi-text-subject</v-icon>
                    <div class="font-weight-medium subtitle-1">Descrição</div>
                </v-layout>
                <div style="margin-left: 40px">
                    <FieldEdit tipo="textarea" placeholder="Adicione uma descrição..."
                    :textEdit="item.descricao" @textChange="(v)=>{item.descricao = v;}" />
                </div>
                <CheckList v-for="(item2, i) in item.checklist" :key="i"
                :item="item2" @onDelete="item.checklist.splice(i, 1)"/>
                <v-layout align-center class="my-2 mt-3">
                    <v-icon size="25" class="mr-3" color="#212121">mdi-format-list-text</v-icon>
                    <div class="font-weight-medium subtitle-1">Comentários</div>
                </v-layout>
                <div style="margin-left: 40px">
                    <FieldEdit dense class="mb-3" placeholder="Adicione um comentário..."
                    :textEdit="commentText" @textChange="onComentario"/>
                    <CommentItem v-for="(comentario, i) in item.comentario" :key="i"
                    :item="comentario" @onDelete="item.comentario.splice(i, 1)"
                    />
                </div>
            </v-flex>
            <v-flex xs12 md4 lg3 class="pl-3">
                <div class="pt-2">
                    <div style="opacity: 0.7" class="caption mb-4">
                        ADICIONAR AO CARTÃO
                    </div>
                    <AddChecklist :card="item" @onAddChecklist="(v)=>item.checklist.push(v)"/>
                    <AddTag :card="item" @onEtiqueta="onEtiqueta" />
                    <DeliveryDate @onAddDate="(v)=>{item.DeliveryDate = v;}"/>
                </div>
                <div class="pt-2">
                    <v-divider />
                    <DeleteCard @onDelete="$emit('onDeleteCard')" />
                </div>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
import axios from "axios";
import DeleteCard from "@/components/Trello/Tasks/List/Details/Opt/DeleteCard.vue";
import FieldEdit from "@/components/UI/FieldEdit.vue";
import AddChecklist from "@/components/Trello/Tasks/List/Details/Opt/AddChecklist.vue";
import AddTag from "@/components/Trello/Tasks/List/Details/Opt/AddTag.vue";
import DeliveryDate from "@/components/Trello/Tasks/List/Details/Opt/DeliveryDate.vue";
import CheckList from "@/components/Trello/Tasks/List/Details/Checklist.vue";
import CommentItem from "@/components/Trello/Tasks/List/Details/CommentItem.vue";
import moment from "moment";

export default {
    components: {
        FieldEdit,
        CommentItem,
        DeleteCard,
        DeliveryDate,
        AddTag,
        CheckList,
        AddChecklist,
    },
    props: {
        item:{
            type: Object,
            required: true
        },
        list:{
            type: Object,
            required: true
        }
    },
    data() {
        return {
            titleEdit: false,
            commentText: "",
        };
    },
    methods: {
        onEtiqueta(v) {
            let index = null;
            let obj = {
                etiquetaID: v.etiquetaID,
                titulo: v.titulo,
                cor: v.cor,
            };
            let itemEdit = this.item.etiqueta.filter((item) => {
                if (item.titulo == v.titulo) {
                    index = i;
                }
                return item.etiquetaID == v.etiquetaID;
            });
            if (index != null) {
                this.item.etiqueta.splice(index, 1);
            } else {
                this.item.etiqueta.push(obj);
            }
        },
        onComentario(text) {
            let obj = {
                comentario: text,
                dataHora: moment().format(),
            };
            this.item.comentario.push(obj);
        },
    },
    created() {
    },
};
</script>

