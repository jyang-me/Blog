<template>
  <section class="module-shell" aria-label="技术栈矩阵">
    <header class="module-head">
      <h2>技术栈矩阵</h2>
      <p>点击切换查看不同层级能力</p>
    </header>

    <div class="chip-row">
      <button
        v-for="group in groups"
        :key="group.name"
        class="chip"
        :class="{ active: activeGroup === group.name }"
        @click="activeGroup = group.name"
      >
        {{ group.name }}
      </button>
    </div>

    <div class="stack-list">
      <article v-for="item in activeItems" :key="item.name" class="stack-item">
        <div class="stack-head">
          <strong>{{ item.name }}</strong>
          <span>{{ item.level }}%</span>
        </div>
        <p>{{ item.note }}</p>
        <div class="stack-track">
          <div class="stack-fill" :style="{ width: item.level + '%' }"></div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const groups = [
  {
    name: '前端',
    items: [
      { name: 'Vue 3', level: 88, note: '组件设计与状态管理' },
      { name: 'VitePress', level: 86, note: '内容结构与主题定制' },
      { name: 'TypeScript', level: 80, note: '类型约束与重构支持' }
    ]
  },
  {
    name: '后端',
    items: [
      { name: 'Node.js', level: 84, note: 'API 与工具脚本开发' },
      { name: 'Python', level: 76, note: '自动化与数据处理' },
      { name: 'PostgreSQL', level: 72, note: '数据建模与查询优化' }
    ]
  },
  {
    name: '工程化',
    items: [
      { name: 'GitHub Actions', level: 78, note: '持续集成流水线' },
      { name: 'Docker', level: 75, note: '统一运行环境' },
      { name: 'Cloudflare Pages', level: 82, note: '静态站点持续部署' }
    ]
  }
]

const activeGroup = ref('前端')

const activeItems = computed(() => groups.find((g) => g.name === activeGroup.value)?.items ?? [])
</script>
