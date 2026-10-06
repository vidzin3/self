<script setup>
import { ref } from "vue";
import cover_image from "@/assets/images/watchs/w1/cover.jpg";
import hand_one_image from "@/assets/images/watchs/w1/hand_one.jpg";
import hand_two_image from "@/assets/images/watchs/w1/hand_two.jpg";
import overview_image from "@/assets/images/watchs/w1/overview.jpg";
import router from "@/plugins/router";
import WatchCard from "@/components/watchCard.vue";

const selected_image = ref(0);
const watch_images = ref([overview_image, hand_one_image, hand_two_image]);

const taobao_logo = ref("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAACOElEQVR4Aa2SA68eURCGt/0hVYw2asO6YY3oRo1q27Zt27Zt27YRlTt92pk9s5u63cmbL3NmZ57BvZEsK5y7IlmYvyJZkL8imZe/Ipmb1WyTP2f68w/lFKufFsmaejimjQ1layuCiva4y8uDsp9nFZVP70VtSRUZG8nbh/bkE09+ablngBwaKYh+RKY4QcVoifhGdrBT82VpNfNBX97k/bC0//CMogMKlisz6cxS8uSKpI3n4clCJzKZGq2q7z3GOsc9Sx3xLRVnWw8fU+3m3niw4Sx5dMRC+pH8wLUky9gxjDWplHk1kiMs9XG29CWe0bTSBD1ztKFSxIklwppwhc4Xd8W9Iz/Id0Ym0LCHjAjQ0YkIManai3twIdpZd0+URQUBRSYzIubwkjvHKFEULBdRfg10aA5QBmEv4mkoT3AozOH7jUAOdS4SjN1xfm20X9vDob0NAuI7TaigK8c9magWkukFoRjTCKvIuHKyrr+v31sJ30O7RhyUnHhESTm1Dkd97WTPJhEIwRY3zUB7BmjvlDpaNty4dcQF/IgMFaBdk7vzu6ijBkkmrpw0sVCgkEoDLhD+GcLUHlHjCImTgjIz6pzMiL19GLf/GiQJX9wMR0sugEPXMAenIF9pVJpCT87EmBqEzt8ECjX8fYiAg0WEp5dwrraOco8jxgPLMC93YHAL4nR0aVyyRolmOpSHqyNoK/5entO9GGPqsPjfl/D+e3HxtibW+j6BjPxFt/zFEfOXHiVnfQEbm98sQWI+2wAAAABJRU5ErkJggg==");

const onRouteBack = () => {
  return router.push({ name: "home" });
};

const watch_datas = ref([
  {
    thumbnails: watch_images,
    title: "Oyster Perpetual",
    subtitle: "A timeless design, reimagined",
    description: `
      This watch draws inspiration from the classic Rolex Oyster Perpetual
      aesthetic, combining Swiss precision with contemporary elegance. This
      watch i build from combinding part by part that i bought all parts from
      <span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAACOElEQVR4Aa2SA68eURCGt/0hVYw2asO6YY3oRo1q27Zt27Zt27YRlTt92pk9s5u63cmbL3NmZ57BvZEsK5y7IlmYvyJZkL8imZe/Ipmb1WyTP2f68w/lFKufFsmaejimjQ1layuCiva4y8uDsp9nFZVP70VtSRUZG8nbh/bkE09+ablngBwaKYh+RKY4QcVoifhGdrBT82VpNfNBX97k/bC0//CMogMKlisz6cxS8uSKpI3n4clCJzKZGq2q7z3GOsc9Sx3xLRVnWw8fU+3m3niw4Sx5dMRC+pH8wLUky9gxjDWplHk1kiMs9XG29CWe0bTSBD1ztKFSxIklwppwhc4Xd8W9Iz/Id0Ym0LCHjAjQ0YkIManai3twIdpZd0+URQUBRSYzIubwkjvHKFEULBdRfg10aA5QBmEv4mkoT3AozOH7jUAOdS4SjN1xfm20X9vDob0NAuI7TaigK8c9magWkukFoRjTCKvIuHKyrr+v31sJ30O7RhyUnHhESTm1Dkd97WTPJhEIwRY3zUB7BmjvlDpaNty4dcQF/IgMFaBdk7vzu6ijBkkmrpw0sVCgkEoDLhD+GcLUHlHjCImTgjIz6pzMiL19GLf/GiQJX9wMR0sugEPXMAenIF9pVJpCT87EmBqEzt8ECjX8fYiAg0WEp5dwrraOco8jxgPLMC93YHAL4nR0aVyyRolmOpSHqyNoK/5entO9GGPqsPjfl/D+e3HxtibW+j6BjPxFt/zFEfOXHiVnfQEbm98sQWI+2wAAAABJRU5ErkJggg==" alt="taobao logo" width="15" /> taobao
      </span>
      including the movement (2813 chinese movement).
    `,
    features: [
      {
        feature: [
          {
            label: "Movement",
            description: "2813 Automatic",
          },
          {
            label: "Case",
            description: "Stainless Steel (316L)",
          },
          {
            label: "Water Resistance",
            description: "3ATM (30m)",
          },
        ],
      },
      {
        feature: [
          {
            label: "Total Cost",
            description: "54.7$",
          },
        ],
      },
    ],
  },
]);
</script>

<template>
  <div style="padding: 20px 40px 0px 40px">
    <button class="button-7" role="button" @click="onRouteBack">
      <svg
        style="width: 15px; height: 15px; fill: white; padding-top: 2px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 544 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-434.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
        />
      </svg>
    </button>
  </div>
  <!-- <div class="watch-card">
    <div class="image-section">
      <div class="primary-image">
        <img
          :src="watch_images[selected_image]"
          loading="lazy"
          alt="Watch detail"
        />
      </div>

      <div class="thumbnail-nav">
        <button
          v-for="(image, index) in watch_images"
          :key="index"
          :class="['thumbnail', { active: selected_image === index }]"
          @click="selected_image = index"
          :aria-label="`View image ${index + 1}`"
        >
          <img :src="image" loading="lazy" :alt="`Watch view ${index + 1}`" />
        </button>
      </div>
    </div>

    <div class="content-section">
      <div class="header">
        <h1 class="title">Oyster Perpetual</h1>
        <p class="subtitle">A timeless design, reimagined</p>
      </div>

      <p class="description">
        This watch draws inspiration from the classic Rolex Oyster Perpetual
        aesthetic, combining Swiss precision with contemporary elegance. This
        watch i build from combinding part by part that i bought all parts from
        <span>
          <img :src="taobao_logo" alt="taobao logo" width="15" /> taobao
        </span>
        including the movement (2813 chinese movement).
      </p>

      <div class="features">
        <div class="feature">
          <span class="feature-label">Movement</span>
          <span class="feature-value">Automatic</span>
        </div>
        <div class="feature">
          <span class="feature-label">Case</span>
          <span class="feature-value">Stainless Steel</span>
        </div>
        <div class="feature">
          <span class="feature-label">Water Resistance</span>
          <span class="feature-value">30m</span>
        </div>
      </div>

      <div class="features">
        <div class="feature">
          <span class="feature-label">Total Cost</span>
          <span class="feature-value">54.7$</span>
        </div>
      </div>
    </div>
  </div> -->
  <template v-for="watch_data in watch_datas">
    <WatchCard
      :thumbnails="watch_data.thumbnails"
      :title="watch_data.title"
      :subtitle="watch_data.subtitle"
      :description="watch_data.description"
      :features="watch_data.features"
    />
  </template>
</template>

<style scoped>
/* Color Palette */
:root {
  --color-bg: #fafaf8;
  --color-dark: #1a1a1a;
  --color-gold: #d4af37;
  --color-border: #e8e8e6;
  --color-text-secondary: #666;
}

/* Layout */
.watch-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 20px 40px;
  background: var(--color-bg);
  border-radius: 2px;
  max-width: 1000px;
}

/* Image Section */
.image-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.primary-image {
  aspect-ratio: 1;
  overflow: hidden;
  background: white;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.primary-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.primary-image:hover img {
  transform: scale(1.02);
}

.thumbnail-nav {
  display: flex;
  gap: 8px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  padding: 0;
  border: 2px solid var(--color-border);
  background: white;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  border-radius: 0;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.thumbnail.active {
  border-color: var(--color-gold);
  box-shadow: 0 0 0 1px var(--color-gold);
}

.thumbnail.active img {
  opacity: 1;
}

.thumbnail:hover img {
  opacity: 1;
}

/* Content Section */
.content-section {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px 0;
}

.header {
  margin-bottom: 24px;
}

.title {
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 2px;
  color: var(--color-dark);
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.subtitle {
  font-size: 14px;
  letter-spacing: 1px;
  color: var(--color-text-secondary);
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
}

.description {
  font-size: 15px;
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin: 0 0 32px 0;
  max-width: 65ch;
}

/* Features Grid */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
  padding: 10px 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.feature {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.feature-label {
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  font-weight: 500;
}

.feature-value {
  font-size: 15px;
  color: var(--color-dark);
  font-weight: 500;
}

/* back button */
.button-7 {
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family:
    -apple-system, system-ui, "Segoe UI", "Liberation Sans", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-7:hover,
.button-7:focus {
  background-color: #07c;
}

.button-7:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.button-7:active {
  background-color: #0064bd;
  box-shadow: none;
}

/* Responsive Design */
@media (max-width: 900px) {
  .watch-card {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px;
  }
}

@media (max-width: 640px) {
  .watch-card {
    gap: 24px;
    padding: 20px;
  }

  .title {
    font-size: 24px;
    letter-spacing: 1.5px;
  }

  .description {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 24px;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px 0;
    margin-bottom: 24px;
  }

  .thumbnail-nav {
    gap: 6px;
  }

  .thumbnail {
    width: 60px;
    height: 60px;
  }
}
</style>
