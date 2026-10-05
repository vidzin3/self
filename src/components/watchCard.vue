<script setup>
import { ref } from "vue";

const props = defineProps({
  thumbnails: {
    type: Array,
    required: false,
    default: [],
  },
  title: {
    type: String,
    required: true,
    default: "Watch Title",
  },
  subtitle: {
    type: String,
    required: true,
    default: "Watch Subtitle",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  features: {
    type: Array,
    default: [
      {
        feature: [
          {
            label: "",
            description: "",
          },
        ],
      },
    ],
  },
});

const selected_image = ref(0);
</script>

<template>
  <div class="watch-card">
    <div class="image-section">
      <div class="primary-image">
        <img
          :src="thumbnails[selected_image]"
          loading="lazy"
          alt="Watch detail"
        />
      </div>

      <div class="thumbnail-nav">
        <button
          v-for="(image, index) in thumbnails"
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
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </div>

      <p class="description" v-html="description"></p>

      <!-- row -->
      <div v-for="fts in features" class="features">
        <div v-for="ft in fts.feature" class="feature">
          <span class="feature-label">{{ ft.label }}</span>
          <span class="feature-value">{{ ft.description }}</span>
        </div>
      </div>
    </div>
  </div>
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
