<script setup lang="ts">
import { ref } from 'vue'
import '@unocss/reset/normalize.css'
import './style.css'
console.log('Hello from Vue x Rspack')

const count = ref(0)
</script>

<template>
  <div class="container">
    <div style="display: flex; gap: 6px">
      <svg
        class="logo"
        viewBox="0 0 128 128"
        width="200"
        height="200"
        data-v-e0ef77de=""
      >
        <path
          fill="#42b883"
          d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
          data-v-e0ef77de=""
        ></path>
        <path
          fill="#35495e"
          d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
          data-v-e0ef77de=""
        ></path>
      </svg>

      <img src="./assets/rspack.png" alt="Rspack" style="width: 200px" />
    </div>
    <h1>Hello, Vue x Rspack</h1>

    <div>
      <button @click="count--">-</button>
      {{ count }}
      <button @click="count++">+</button>
    </div>

    <div>
      <a href="https://github.com/sxzz/vue-rspack" target="_blank">GitHub</a>
    </div>
  </div>
</template>
