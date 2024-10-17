import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    // vue(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['md-linedivider'].includes(tag)
        }
      }
    })
  ],
  // resolve: {
  //   alias: {
  //     '~': resolve(__dirname, './*'), // Ensure this matches your project structure
  //     '@': resolve(__dirname, 'src')
  //   }
  // },
  test: {
    setupFiles: 'setupTest.ts',
    globals: true, // Optional: Enables global test methods like `describe` and `it` without importing them
    environment: 'jsdom',
    alias: {
      '~': resolve(__dirname, '/') // Add this line for test environment
    }
  }
})
