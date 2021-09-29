<template>
    <v-card class="pa-2" color="white" @click="onDetails">
        <v-layout wrap v-if="item.etiqueta.length>0">
            <v-card v-for="(etq,i) in item.etiqueta" :key="i"
            class="elevation-0 mr-2 mb-1 px-1 text-center caption white--text"
            style="width:fit-content" height="20" :color="etq.cor">
                {{etq.titulo}}
            </v-card>
        </v-layout>
        <div class="font-weight-regular subtitle-1">{{item.titulo}}</div>
        <v-layout align-center wrap class="mt-1">
            <v-card v-if="item.deliveryDate!=null" color="green" class="body-2 pa-1 mr-1 white--text">
                <v-layout align-center>
                <v-icon color="white" size="15" class="pr-1">mdi-clock</v-icon>
                {{item.deliveryDate!=null?item.deliveryDate.substring(0,10).split("-").reverse().join("/"):''}}
                </v-layout>
            </v-card>
            <div v-if="item.comentario.length>0" class="mr-1">
                <v-layout class="body-2" style="opacity:0.6">
                <v-icon size="15" class="pr-1" color="black">mdi-comment-outline</v-icon>
                {{item.comentario.length}}
                </v-layout>
            </div>
            <div v-if="qtdCheckList(item)>0" class="mr-1">
                <v-layout
                class="body-2"
                :style="qtdCheckList(item)==qtdChecked(item)?'opacity:1':'opacity:0.6'"
                :class="qtdCheckList(item)==qtdChecked(item)?'green--text':'black--text'"
                >
                <v-icon
                    size="15"
                    class="pr-1"
                    :color="qtdCheckList(item)==qtdChecked(item)?'green':'black'"
                >mdi-checkbox-marked-outline</v-icon>
                {{qtdChecked(item)}}/{{qtdCheckList(item)}}
                </v-layout>
            </div>
        </v-layout>
        <v-dialog max-width="700" v-model="showDetails" persistent>
            <DetalheCard
                v-if="showDetails"
                :item="item"
                @onClose="showDetails=false"
                @onDeleteCard="$emit('onDeleteCard')"
                @onAddDate="item.deliveryDate=$event"
                :list="list"
            />
        </v-dialog>
    </v-card>
</template>

<script>
import DetalheCard from "@/components/Tasks/List/DetalheCard.vue";

export default {
    props: {
        item:{
            type: Object,
            required: true
        },
        list:{
            type: Object,
            default: ()=>{}
        }
    },
    components:{
        DetalheCard
    },
    data(){
        return{
            showDetails: false,
            itemDetails: {}
        }
    },
    methods: {
        onDetails(){
			this.showDetails = true;
		},
        qtdChecked() {
            let qtd = 0;
            this.item.checklist.map((item) => {
                item.list.map((item2) => {
                if (item2.checked) {
                    qtd += 1;
                }
                });
            });
            return qtd;
        },
        qtdCheckList() {
            let qtd = 0;
            this.item.checklist.map((item) => {
                qtd += item.list.length;
            });
            return qtd;
        },
    },
};
</script>

