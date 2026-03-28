<template>
  <section class="module-shell" aria-label="生活主题面板">
    <header class="module-head">
      <h2>生活主题面板</h2>
      <p>点击下方板块查看对应内容与节奏计划</p>
    </header>

    <div class="chip-row">
      <button
        v-for="panel in panels"
        :key="panel.key"
        class="chip"
        :class="{ active: activeKey === panel.key }"
        @click="activeKey = panel.key"
      >
        <span class="chip-icon">{{ panel.icon }}</span>
        <span>{{ panel.title }}</span>
      </button>
    </div>

    <Transition name="panel-fade" mode="out-in">
      <article class="life-panel" :key="activePanel.key">
        <div class="life-panel-head">
          <h3>{{ activePanel.icon }} {{ activePanel.title }}</h3>
          <span class="life-score">进度 {{ activePanel.progress }}%</span>
        </div>
        <p>{{ activePanel.desc }}</p>
        <div class="life-progress">
          <div class="life-progress-fill" :style="{ width: activePanel.progress + '%' }"></div>
        </div>
        <ul>
          <li v-for="item in activePanel.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </Transition>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const panels = [
  {
    key: 'fitness',
    icon: '🏋️',
    title: '健身',
    progress: 82,
    desc: '以力量 + 有氧为主，关注体能和恢复。',
    items: ['每周 4 次训练', '每次 60-90 分钟', '记录心率与训练量']
  },
  {
    key: 'travel',
    icon: '🧭',
    title: '旅行',
    progress: 64,
    desc: '把旅行当成输入方式，持续积累生活体验。',
    items: ['每月 1 次短途', '拍照与短文复盘', '关注路线与预算']
  },
  {
    key: 'entertainment',
    icon: '🎬',
    title: '娱乐',
    progress: 70,
    desc: '保持适度娱乐，帮助身心切换与放松。',
    items: ['周末观影或游戏', '控制时长避免透支', '保留高质量社交']
  },
  {
    key: 'intern',
    icon: '💼',
    title: '实习',
    progress: 76,
    desc: '输出实习经验，形成个人方法论沉淀。',
    items: ['每周总结 3 条经验', '记录问题与解法', '沉淀可复用模板']
  }
]

const activeKey = ref('fitness')
const activePanel = computed(() => panels.find((p) => p.key === activeKey.value) ?? panels[0])
</script>
