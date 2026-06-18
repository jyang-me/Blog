<template>
  <section class="hero-console" aria-label="首屏面板">
    <p class="hero-kicker">Personal Operating System</p>
    <h1>{{ title }}</h1>
    <p class="hero-typing">{{ subtitle }}</p>

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
const title = '构建一个可持续进化的技术博客'
const subtitle = '学习路径可视化 · 技术栈能力图谱 · 实战复盘更新'

const metrics = [
  { label: 'Weekly Logs', value: '05' },
  { label: 'Focus Hours', value: '18h' },
  { label: 'Projects', value: '03' },
  { label: 'Health Score', value: '92%' }
]
</script>
