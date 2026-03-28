<template>
  <section class="tech-dashboard" aria-label="科技动态面板">
    <header class="dash-header">
      <p class="dash-kicker">Realtime Console</p>
      <h2>个人状态面板</h2>
      <p class="dash-time">{{ now }}</p>
    </header>

    <div class="dash-grid">
      <article class="dash-card pulse" v-for="item in metrics" :key="item.label">
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
const tick = ref(0)
let timer

const metrics = computed(() => [
  { label: '学习进度', value: 68 + (tick.value % 8), unit: '%' },
  { label: '本周输出', value: 5 + (tick.value % 3), unit: ' 篇' },
  { label: '专注时长', value: 14 + (tick.value % 6), unit: ' h' },
  { label: '灵感热度', value: 82 + (tick.value % 10), unit: '%' }
])

const skills = computed(() => {
  const wave = tick.value % 6
  return [
    { name: 'Vue / VitePress', score: 86 + (wave > 2 ? 2 : 0) },
    { name: 'TypeScript', score: 79 + (wave > 3 ? 3 : 0) },
    { name: 'Node.js', score: 83 + (wave > 1 ? 2 : 0) },
    { name: 'System Design', score: 74 + (wave > 4 ? 4 : 0) }
  ]
})

const now = computed(() =>
  new Intl.DateTimeFormat('zh-CN', {
    dateStyle: 'full',
    timeStyle: 'medium'
  }).format(clock.value)
)

onMounted(() => {
  timer = setInterval(() => {
    clock.value = new Date()
    tick.value += 1
  }, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>
