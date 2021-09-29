<template>
    <v-sheet>
        <v-layout flat class="px-0" align-center :wrap="$vuetify.breakpoint.smAndDown">
            <v-layout align-center >
                <v-menu bottom right>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn height="40" outlined color="grey darken-2" v-bind="attrs" v-on="on" class="mr-4">
                            <span>{{ typeText }}</span>
                            <v-icon right>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, index) of typeToLabel" :key="index" @click="$emit('onChangeType',item.value)">
                            <v-list-item-title>{{item.text}}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <!-- <v-btn outlined height="40" class="mr-4" color="food" @click="$emit('onHoje')">
                    Hoje
                </v-btn> -->
                <v-btn fab outlined height="40" small color="food" @click="$emit('onPrev')" style="border-radius:5px 0px 0px 5px">
                    <v-icon small>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab outlined height="40" small color="food" @click="$emit('onNext')" style="border-radius:0px 5px 5px 0px">
                    <v-icon small>mdi-chevron-right</v-icon>
                </v-btn>
                <v-toolbar-title v-if="!!titulo" class="ml-4" style="text-transform:capitalize">
                    {{ titulo }}
                </v-toolbar-title>
            </v-layout>
        </v-layout>
    </v-sheet>
</template>

<script>
import DatePickerMenu from "@/components/UI/DatePickerMenu.vue";
export default {
    props:{
        type:{
            type: String,
            default: ""
        },
        refCalendar:{
            type: [Object,undefined],
            required:true,
        },
        titulo:{
            type: String,
            default:""
        },
    },
    components:{
        DatePickerMenu
    },
    data(){
        return{
            typeToLabel: [
                {text: 'Mês', value: "month"},
                {text: 'Semana', value: "week"},
                {text: 'Dia', value: "day"},
                {text: '4 Dias', value: "4day"}
            ],
        }
    },
    methods:{
    },  
    computed:{
        typeText(){
            let types = this.typeToLabel.filter(item=>{
                return item.value == this.type;
            });
            return types.length>0?types[0].text:"";
        }
    },
}
</script>