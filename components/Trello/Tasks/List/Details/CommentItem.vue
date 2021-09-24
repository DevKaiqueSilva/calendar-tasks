<template>
    <div class="my-2">
        <span class="body-2" style="opacity:0.6">{{$format().date(item.dataHora)}}</span>
        <div>
            <v-card class="pa-2" color="white" style="width:fit-content">{{item.comentario}}</v-card>
        </div>
        <a text small class="body-2 ml-1 mt-1" @click="$emit('onDelete')"
        style="text-decoration:underline;color:rgba(0,0,0,0.6) !important">
            Excluir
        </a>
    </div>
</template>

<script>
export default {
    props: {
        item:{
            type: Object,
            required: true
        }
    },
};
</script>

