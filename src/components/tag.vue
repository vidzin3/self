<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  rounded: {
    type: String,
    default: "md",
  },
  icon: {
    type: String,
    default: "",
  },
});

const hasIcon = computed(() => {
  return props.icon.length > 0;
});
</script>
<template>
  <div
    style="
      padding: 4px 15px;
      box-shadow:
        rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      display: flex;
      align-items: center;
    "
    :style="[
      {
        borderRadius:
          rounded == 'md' ? '10px' : rounded == 'pill' ? '500px' : '',
      },
    ]"
  >
    <template v-if="hasIcon">
      <Icon style="margin-right: 7px;" :icon="icon" />
    </template>
    <div>
      {{ title }}
    </div>
  </div>
</template>
