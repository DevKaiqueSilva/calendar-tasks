<template>
    <v-card color="grey lighten-4" :min-width="$vuetify.breakpoint.mdAndUp?'350px':'auto'" :max-width="showClose==true?500:'auto'">
        <v-card-title :style="`background-color:grey`" class="pa-0">
            <v-layout align-center class="body-1 white--text">
                <v-btn icon fab color="white" small v-if="showClose" @click="$emit('onClose')">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <div class="font-weight-bold wrap-word pa-2">{{item.dataHoraRetirada.substring(11,16)}} | {{item.name}}</div>
                <v-spacer/>
                <v-btn icon fab color="white" small v-if="showClose==false && $vuetify.breakpoint.smAndDown" @click="expand=!expand">
                    <v-icon>mdi-chevron-{{expand==true?'up':'down'}}</v-icon>
                </v-btn>
            </v-layout>
        </v-card-title>
        <v-card-text v-if="expand==true || showClose==true || $vuetify.breakpoint.mdAndUp" class="pa-1 pa-md-2">
            <v-layout wrap align-center>
                <v-flex xs12 md8>
                    <div class="caption  font-weight-bold">Data Hora Retirada Início/Fim</div>
                    <v-layout align-center>
                        <v-icon class="mr-2">mdi-calendar</v-icon>
                        {{$formataData(item.dataHoraRetirada)}} ~ {{$formataData(item.dataHoraRetiradaFim)}}
                    </v-layout>
                </v-flex>
                <v-flex xs6 md4 class="pr-md-1">
                    <div class="caption  font-weight-bold">Cliente</div>
                    <div class="wrap-word body-2 wrap-word">{{item.nome_razaosocial}}</div>
                </v-flex>
                <v-flex xs6 md4>
                    <div class="caption font-weight-bold">Situação</div>
                    <div class="wrap-word body-2">{{item.situacaoDelivery}}({{item.situacao}})</div>
                </v-flex>
                <v-flex xs9 md6 class="pl-md-1">
                    <div class="caption font-weight-bold">Produtos</div>
                    <div class="body-2">{{item.produtosStr}}</div>
                </v-flex>
                <v-flex xs3 md2 class="pl-md-1">
                    <div class="caption font-weight-bold">Detalhes</div>
                    <v-btn fab color="blue" style="border-radius:4px;" block 
                    class="elevation-0" height="40" small @click="$emit('onDetalhes')">
                        <v-icon color="white">mdi-magnify</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props:{
        item: {
            type:Object,
            required:true
        },
        showClose:{
            type: Boolean,
            default: true
        }
    },
    data(){
        return{
            expand:false,
        }
    },
    computed:{
        food() {
            return this.$vuetify.theme.themes.light.food;
        },
    }
}
</script>