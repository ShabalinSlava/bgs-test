<template>
<section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
        Нужно войти в систему
    </div>
    <form @submit.prevent="onSubmit">
        <h1>Войти в систему</h1>
        <div class="form-group">
            <label for="exampleInputEmail1">Введите Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">Тут будет текст если почта кривая</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Введите пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
            <small id="emailHelp" class="form-text text-muted">Тут будет текс минимального количества символов для пароля</small>
        </div>
        <p>
            <nuxt-link to="/">На главную страницу</nuxt-link>
        </p>
        <button type="submit" class="btn btn-primary">Вход</button>
    </form>
</section>
</template>

<script>
export default {
    layout: 'empty',
    methods: {
        onSubmit() {
            this.$store.dispatch('login')
            this.$router.push('/profile')
        }
    }
}
</script>

<style scoped>
form {
    width: 500px;
    margin: 0px auto;
}
</style>
