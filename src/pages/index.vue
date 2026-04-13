<script setup>
import CardExperience from "@/components/cardExperience.vue";
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
    link: "https://www.facebook.com/share/1CP32JoopR/",
  },
  {
    title: "Twitter",
    rounded: "md",
    icon: "mdi:twitter",
    link: "https://x.com/Davidmoner5",
  },
  {
    title: "LinkedIn",
    rounded: "md",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/kouch-david-944873355?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    title: "Github",
    rounded: "md",
    icon: "mdi:github",
    link: "https://github.com/vidzin3",
  },
]);

const techStacks = ref([
  {
    title: "FrontEnd",
    icon: "mdi:code-tags",
    stacks: [
      {
        title: "html",
        icon: "mdi:language-html5",
        color: "",
      },
      {
        title: "css",
        icon: "mdi:language-css3",
        color: "",
      },
      {
        title: "javascript",
        icon: "mdi:language-javascript",
        color: "",
      },
      {
        title: "tailwind",
        icon: "mdi:tailwind",
        color: "",
      },
      {
        title: "vuetify",
        icon: "mdi:vuetify",
        color: "",
      },
      {
        title: "vue js",
        icon: "mdi:vuejs",
        color: "",
      },
      {
        title: "axios",
        icon: "",
        color: "",
      },
    ],
  },
  {
    title: "BackEnd",
    icon: "mdi:database-sync",
    stacks: [
      {
        title: "php",
        icon: "mdi:language-php",
        color: "",
      },
      {
        title: "laravel",
        icon: "mdi:laravel",
        color: "",
      },
      {
        title: "dotnet core web api",
        icon: "",
        color: "",
      },
    ],
  },
  {
    title: "Programming",
    icon: "mdi:code-json",
    stacks: [
      {
        title: "c++",
        icon: "mdi:language-cpp",
        color: "",
      },
      {
        title: "c#",
        icon: "mdi:language-csharp",
        color: "",
      },
      {
        title: "java",
        icon: "mdi:language-java",
        color: "",
      },
    ],
  },
  {
    title: "Database",
    icon: "mdi:database",
    stacks: [
      {
        title: "mysql",
        icon: "",
        color: "",
      },
      {
        title: "postgresql",
        icon: "",
        color: "",
      },
    ],
  },
  {
    title: "Codebase",
    icon: "mdi:file-code",
    stacks: [
      {
        title: "github",
        icon: "mdi:github",
        color: "",
      },
      {
        title: "gitlab",
        icon: "mdi:gitlab",
        color: "",
      },
      {
        title: "bitbucket",
        icon: "mdi:bitbucket",
        color: "",
      },
    ],
  },
  {
    title: "Platform control/Server",
    icon: "mdi:server-network",
    stacks: [
      {
        title: "ubuntu",
        icon: "mdi:ubuntu",
        color: "",
      },
      {
        title: "digital ocean",
        icon: "mdi:digital-ocean",
        color: "",
      },
      {
        title: "apache",
        icon: "mdi:apache-kafka",
        color: "",
      },
    ],
  },
]);

const experiences = ref([
  {
    title: "E-Clinic",
    timeline: "18/12/2023",
    description: "Training real world project",
    isCompleted: false,
    chip: "NoFund",
  },
  {
    title: "មន្ទីរពហុព្យាបាល និង សម្ភព សុខភីរម្យ",
    timeline: "06/01/2024",
    description: "Team project",
    isCompleted: false,
    chip: "late",
  },
  {
    title: "Freelancer",
    timeline: "01/04/2024",
    description:
      "open freelance completed task client or developer couldn't finished.",
    isCompleted: true,
    chip: "completed",
  },
  {
    title: "One window service battambang (OWSO)",
    timeline: "04/09/2024",
    description:
      "Volunteer project one window service. Restructuring and fixing failed logical functions. This project is already being used by Battambang Municipality.",
    isCompleted: true,
    chip: "completed",
  },
  {
    title: "Department of economic and financial PURSAT",
    timeline: "01/03/2025",
    description:
      "Project management Department of economic and financial PURSAT. Reanalysis and system reconstruction feature. The system is used internally to manage Human resources, Documents, Letter (in and out), Events and Finances of other state entities.  Released in 01/01/2026.",
    isCompleted: true,
    chip: "completed",
  },
  {
    title: "Department of culture and fine art PURSAT",
    timeline: "01/03/2026",
    description:
      "Bachelor's Thesis project. Under analysis data and feature. The system is used internally to manage Human resources, Letter (in and out), Events and Finances.",
    isCompleted: false,
    chip: "Underdevelopment",
  },
]);

const clickToLink = (link) => {
  if (!link) return false;
  const a = document.createElement("a");
  a.href = link;
  a.setAttribute("target", "blank");
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
};
</script>
<template>
  <div style="width: 100%; height: 100%">
    <div style="display: flex; flex-wrap: wrap">
      <div
        class="basic-flex"
        style="flex-grow: 1; flex-shrink: 1; padding: 3px"
      >
        <div style="font-size: 40px; font-weight: bold">About Me</div>
        <div>
          Hello, I am <span style="color: #0571f4">Kouch David</span> and I'm a
          Full-stack Web Developer with over 3 years of experience building
          scalable web applications. My journey started with a fascination for
          how data moves across the internet, leading me to engineering
          lifecycle.
        </div>
        <div>
          I specialize in bridging the gap between complex backend systems and
          intuitive frontend experiences. I believe that good architecture isn't
          just about code that works, but about creating systems that are
          maintainable, performant, and delightful for users.APIs are built into
          every system.
        </div>
        <div>
          When I'm not architecting systems, I contribute to open-source
          projects and mentor junior developers in navigating the ever-evolving
          JavaScript ecosystem.
        </div>
        <div>
          <span style="color: #0571f4">Bachelor's Thesis topic</span>:
          Development of an administrative management system at the Department
          of Culture and Fine Arts of Pursat Province <br />(Under development)
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
            <Tag
              style="cursor: pointer"
              :title="tag.title"
              :rounded="tag.rounded"
              :icon="tag.icon"
              @click.prevent="clickToLink(tag.link)"
            />
          </template>
        </div>

        <div style="font-size: 40px; font-weight: bold">Experiences</div>
        <div
          style="
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 10px 0px;
          "
        >
          <template v-for="exp in experiences">
            <CardExperience
              :title="exp.title"
              :timeline="exp.timeline"
              :description="exp.description"
              :is-completed="exp.isCompleted"
              :chip="exp.chip"
            />
          </template>
        </div>
      </div>
      <div
        class="basic-flex"
        style="flex-grow: 1; flex-shrink: 1; padding: 3px"
      >
        <div style="font-size: 40px; font-weight: bold">Technical Skills</div>
        <div style="color: #0571f4">Core Stack & Competencies</div>
        <div
          style="display: flex; gap: 10px; margin: 10px 0px; flex-wrap: wrap"
        >
          <template v-for="tech in techStacks">
            <CardTech
              :title="tech.title"
              :title-icon="tech.icon"
              :stacks="tech.stacks"
            />
          </template>
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
