<template>
  <section class="module-shell" aria-label="工作时间线">
    <header class="module-head">
      <h2>工作时间线</h2>
      <p>持续迭代中的关键里程碑</p>
    </header>

    <div class="timeline">
      <article v-for="node in nodes" :key="node.phase" class="timeline-node">
        <p class="phase">{{ node.phase }}</p>
        <h3>{{ node.title }}</h3>
        <p>{{ node.desc }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const nodes = [
  {
    phase: 'Phase 01',
    title: '需求拆解与界面原型',
    desc: '确定页面结构、导航路径和交互优先级。'
  },
  {
    phase: 'Phase 02',
    title: '主题系统搭建',
    desc: '完成科技视觉变量、组件样式和动效基线。'
  },
  {
    phase: 'Phase 03',
    title: '内容系统联调',
    desc: '将学习、技术栈、工作、生活版块连通。'
  },
  {
    phase: 'Phase 04',
    title: '部署与性能回归',
    desc: '构建验证并保持页面加载稳定。'
  }
]
</script>
