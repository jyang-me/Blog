<template>
  <section class="tech-dashboard" aria-label="状态面板">
    <header class="dash-header">
      <p class="dash-kicker">Overview</p>
      <h2>个人状态面板</h2>
      <p class="dash-time">{{ now }}</p>
    </header>

    <div class="dash-grid">
      <article class="dash-card" v-for="item in metrics" :key="item.label">
        <p class="label">{{ item.label }}</p>
        <p class="value">{{ item.value }}<span>{{ item.unit }}</span></p>
      </article>
    </div>

    <div class="dash-track-list">
      <div class="track" v-for="s in skills" :key="s.name">
        <div class="track-head">
          <span>{{ s.name }}</span>
          <span>{{ s.score }}%</span>
        </div>
        <div class="track-bar">
          <div class="track-fill" :style="{ width: s.score + '%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const clock = ref(new Date())
let timer

const metrics = [
  { label: '学习进度', value: 72, unit: '%' },
  { label: '本周输出', value: 6, unit: ' 篇' },
  { label: '专注时长', value: 18, unit: ' h' },
  { label: '灵感热度', value: 88, unit: '%' }
]

const skills = [
  { name: 'Vue / VitePress', score: 86 },
  { name: 'TypeScript', score: 79 },
  { name: 'Node.js', score: 83 },
  { name: 'System Design', score: 74 }
]

const now = computed(() =>
  new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  }).format(clock.value)
)

onMounted(() => {
  timer = setInterval(() => { clock.value = new Date() }, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>
