<script setup>
import Tag from './tag.vue';

const props = defineProps({
    title:{
        type:String,
        default: ""
    },
    titleIcon:{
        type:String,
        default: ""
    },
    stacks:{
        type:Array,
        default:[
            {
                title:"",
                icon:""
            }
        ]
    }
})
</script>
<template>
    <div
        style="
        padding: 10px;
        width: 100%;
        box-shadow:
            rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
            rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        border-radius: 10px;
        "
    >
        <div style="display: flex;flex-wrap: wrap;gap: 8px;align-items: center;">
            <div style="display: flex; padding: 2px;border-radius: 6px; background-color: rgba(5,113,244,0.1)">
                <Icon :icon="titleIcon" style="font-size: 30px;color: #0571F4;"></Icon>
            </div>
            <div style="font-weight: bold; font-size: 21px;">
                {{ title }}
            </div>
        </div>
        <div style="margin: 10px 0px">
            <div style="display: flex;flex-wrap: wrap;gap: 7px;">
                <template v-for="stack in stacks">
                    <Tag :title="stack.title" rounded="pill" :icon="stack.icon" />
                </template>
            </div>
        </div>
    </div>
</template>