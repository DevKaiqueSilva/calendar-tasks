<template>
    <v-dialog max-width="350" v-model="visible" persistent>
        <v-card >
            <div class="body-1 pa-4">
                <span v-html="message"/>
            </div>
            <v-layout :style="`border-top:1px solid ${blueL}`">
                <v-flex xs6>
                    <v-btn block color="food" height="50" text @click="()=>{confirmMessage.onNo()}">
                        {{lblNo}}
                    </v-btn>
                </v-flex>
                <v-flex xs6 :style="`border-left:1px solid ${blueL}`">
                    <v-btn block color="food" height="50" text @click="()=>{confirmMessage.onYes();$store.dispatch('data/setConfirmMessage',{visible:false})}">
                        {{lblYes}}
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>


<script>
export default {
    watch:{
    },
    computed:{
        blueL(){
            return this.$vuetify.theme.themes.light.blueL;
        },
        confirmMessage(){
            if(!!this.$store.getters["data/confirmMessage"]){
                return this.$store.getters["data/confirmMessage"];
            }else{
                return {
                    visible:false,
                    message: "",
                    lblNo: "NÃO",
                    lblYes: "SIM",
                    onNo: ()=>{},
                    onYes: ()=>{}
                }
            }
        },
        visible(){
            return !!this.confirmMessage.visible?this.confirmMessage.visible:false;
        },
        message(){
            return !!this.confirmMessage.message?this.confirmMessage.message:"";
        },
        lblNo(){
            return !!this.confirmMessage.lblNo?this.confirmMessage.lblNo:"";
        },
        lblYes(){
            return !!this.confirmMessage.lblYes?this.confirmMessage.lblYes:"";
        },
    }
}
</script>