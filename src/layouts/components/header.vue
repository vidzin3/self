<script setup lang="ts">
import ButtonNav from '@/components/buttonNav.vue';
import toast from '@/plugins/toast';

const onClick = () => {
    toast.fire({
        title:"I Love you 😘",
        icon:"success"
    })
}

</script>

<template>
    <div class="background-template" style="padding: 0px 14px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">
        <div style="display: flex;justify-content: space-between; align-items: center;height:50px;">
            <div style="font-weight: bold;">
                MEETDAVID
            </div>
            <div>
                <!-- <ButtonNav title="Resume" @click.prevent="onClick" /> -->
            </div>
        </div>
    </div>
</template>