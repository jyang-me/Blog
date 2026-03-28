<template>
  <section class="module-shell" aria-label="博客筛选器">
    <header class="module-head">
      <h2>文章雷达</h2>
      <p>按标签快速筛选内容</p>
    </header>

    <div class="chip-row">
      <button
        v-for="t in tags"
        :key="t"
        class="chip"
        :class="{ active: currentTag === t }"
        @click="currentTag = t"
      >
        {{ t }}
      </button>
    </div>

    <div class="card-grid">
      <a v-for="post in filteredPosts" :key="post.link" :href="post.link" class="neo-card">
        <p class="meta">{{ post.date }} · {{ post.tag }}</p>
        <h3>{{ post.title }}</h3>
        <p>{{ post.desc }}</p>
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const currentTag = ref('全部')

const posts = [
  {
    title: '我的第一篇博客',
    link: '/blog/first-post',
    date: '2026-03-28',
    tag: '学习',
    desc: '记录博客启动过程与内容规划。'
  },
  {
    title: 'VitePress 使用指南',
    link: '/blog/vitepress-guide',
    date: '2026-03-28',
    tag: '技术',
    desc: '从搭建到部署的一套基础工作流。'
  },
  {
    title: '工作流改造计划',
    link: '/work',
    date: '2026-03-28',
    tag: '工作',
    desc: '将交付流程拆解为可追踪节点。'
  },
  {
    title: '本周生活节奏记录',
    link: '/life',
    date: '2026-03-28',
    tag: '生活',
    desc: '保持体能、输入与专注输出的平衡。'
  }
]

const tags = ['全部', '学习', '技术', '工作', '生活']

const filteredPosts = computed(() => {
  if (currentTag.value === '全部') return posts
  return posts.filter((p) => p.tag === currentTag.value)
})
</script>
