export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (err, vm, info) => {
    console.error('Error:', err)
    console.error('vm:', vm)
    console.error('info:', info)
  }
})
