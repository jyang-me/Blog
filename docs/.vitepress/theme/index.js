import DefaultTheme from 'vitepress/theme'
import HeroConsole from './components/HeroConsole.vue'
import TechDashboard from './components/TechDashboard.vue'
import BlogExplorer from './components/BlogExplorer.vue'
import LifePanels from './components/LifePanels.vue'
import StackMatrix from './components/StackMatrix.vue'
import WorkTimeline from './components/WorkTimeline.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HeroConsole', HeroConsole)
    app.component('TechDashboard', TechDashboard)
    app.component('BlogExplorer', BlogExplorer)
    app.component('LifePanels', LifePanels)
    app.component('StackMatrix', StackMatrix)
    app.component('WorkTimeline', WorkTimeline)
  }
}
