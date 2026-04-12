<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  timeline: {
    type: String,
    default: "",
  },
  border_color: {
    type: String,
    default: "#0571f4",
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: "",
  },
  chip: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    style="
      padding: 10px;
      width: 100%;
      border-left: 3px;
      border-right: 0;
      border-top: 0;
      border-bottom: 0;
      border-color: black;
      border-style: solid;
      background-color: rgba(235, 241, 255, 0.3);
      width: 95%;
    "
    :style="[
      {
        borderColor: border_color,
      },
    ]"
  >
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <div>
        <span style="font-weight: bold">{{ title }}</span>
      </div>
      <div>
        <span style="font-weight: bold">{{ timeline }}</span>
      </div>
    </div>
    <div style="display: flex; align-items: start; margin-top: 10px; gap: 10px">
      <div style="flex-grow: 1; flex-basis: 80%">
        {{ description }}
      </div>
      <div
        style="
          flex-grow: 1;
          padding: 4px 15px;
          display: flex;
          align-items: center;
          border-radius: 500px;
          justify-content: center;
        "
        :style="[
          {
            backgroundColor: isCompleted
              ? 'rgba(92, 184, 92, 0.3)'
              : 'rgba(255, 51, 51, 0.3)',
          },
        ]"
      >
        {{ chip }}
      </div>
    </div>
  </div>
</template>
