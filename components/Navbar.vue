<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Главная</a>

    <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-if="!hasToken">
                <nuxt-link class="nav-link" to='/login'>
                    Войти
                </nuxt-link>
            </li>
            <li class="nav-item" v-else>
                <a @click.prevent="logout" class="nav-link" href="#">
                    Выйти
                </a>
            </li>
        </ul>
    </div>
</nav>
</template>
<script>
export default {
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
