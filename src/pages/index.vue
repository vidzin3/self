<script setup>
import CardTech from "@/components/cardTech.vue";
import Tag from "@/components/tag.vue";
import { ref } from "vue";

const aboutTags = ref([
  {
    title: "3+ Years Experiences",
    rounded: "md",
  },
  {
    title: "3 Project Completed",
    rounded: "md",
  },
  {
    title: "5+ Clients",
    rounded: "md",
  },
]);

const socialMediaTags = ref([
  {
    title: "Facebook",
    rounded: "md",
    icon: "mdi:facebook",
  },
  {
    title: "Twitter",
    rounded: "md",
    icon: "mdi:twitter",
  },
  {
    title: "LinkedIn",
    rounded: "md",
    icon: "mdi:linkedin",
  },
  {
    title: "Github",
    rounded: "md",
    icon: "mdi:github",
  },
]);
</script>
<template>
  <div style="width: 100%">
    <div style="display: flex; flex-wrap: wrap">
      <div
        class="basic-flex"
        style="flex-grow: 1; flex-shrink: 1; padding: 3px"
      >
        <div style="font-size: 40px; font-weight: bold">About Me</div>
        <div>
          Hello, I am Kouch David and I'm a Full-stack Web Developer with over 3 years of experience
          building scalable web applications. My journey started with a
          fascination for how data moves across the internet, leading me to
          engineering lifecycle.
        </div>
        <div>
          I specialize in bridging the gap between complex backend systems and
          intuitive frontend experiences. I believe that good architecture isn't
          just about code that works, but about creating systems that are
          maintainable, performant, and delightful for users.APIs are built
          into every system.
        </div>
        <div>
          When I'm not architecting systems, I contribute to open-source
          projects and mentor junior developers in navigating the ever-evolving
          JavaScript ecosystem.
        </div>
        <div
          style="display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap"
        >
          <template v-for="tag in aboutTags">
            <Tag :title="tag.title" :rounded="tag.rounded" />
          </template>
        </div>
        <div style="font-size: 40px; font-weight: bold">Social Media</div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap">
          <template v-for="tag in socialMediaTags">
            <Tag :title="tag.title" :rounded="tag.rounded" :icon="tag.icon" />
          </template>
        </div>
      </div>
      <div
        class="basic-flex"
        style="flex-grow: 1; flex-shrink: 1; padding: 3px"
      >
        <div style="font-size: 40px; font-weight: bold">Technical Skills</div>
        <div style="color: #0571f4">Core Stack & Competencies</div>
        <div style="display: flex;gap: 10px;margin: 10px 0px;flex-wrap: wrap;">
            <CardTech title="FontEnd" title-icon="mdi:code-array" />
            <CardTech title="BackEnd" title-icon="mdi:database-sync" />
            <CardTech title="Database" title-icon="mdi:database" />
            <CardTech title="Codebase" title-icon="mdi:file-code" />
            <CardTech title="Server" title-icon="mdi:server-network" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.basic-flex {
  flex-basis: 50%;
}
@media screen and (max-width: 768px) {
  .basic-flex {
    flex-basis: 100%;
  }
}
</style>
