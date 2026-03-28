<template>
  <section class="hero-console" aria-label="首屏科技面板">
    <p class="hero-kicker">Personal Operating System</p>
    <h1>{{ title }}</h1>
    <p class="hero-typing">
      <span>{{ typed }}</span><i class="cursor">|</i>
    </p>

    <div class="hero-actions">
      <a class="hero-btn primary" href="/blog/">进入博客</a>
      <a class="hero-btn" href="/tech-stack">查看技术栈</a>
    </div>

    <div class="hero-metrics">
      <article v-for="m in metrics" :key="m.label" class="metric">
        <p>{{ m.label }}</p>
        <strong>{{ m.value }}</strong>
      </article>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const title = '构建一个可持续进化的技术博客'
const phrases = [
  '学习路径可视化中...',
  '技术栈能力图谱同步中...',
  '工作与生活节奏调优中...'
]

const typed = ref('')
let p = 0
let i = 0
let deleting = false
let timer

const metrics = [
  { label: 'Weekly Logs', value: '05' },
  { label: 'Focus Hours', value: '18h' },
  { label: 'Projects', value: '03' },
  { label: 'Health Score', value: '92%' }
]

const tick = () => {
  const text = phrases[p]
  if (!deleting) {
    typed.value = text.slice(0, i + 1)
    i += 1
    if (i === text.length) {
      deleting = true
      timer = setTimeout(tick, 1200)
      return
    }
  } else {
    typed.value = text.slice(0, i - 1)
    i -= 1
    if (i === 0) {
      deleting = false
      p = (p + 1) % phrases.length
    }
  }
  timer = setTimeout(tick, deleting ? 45 : 80)
}

onMounted(() => {
  tick()
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>
