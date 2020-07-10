<template>
<section>
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
        Нужно войти в систему
    </div>
    <h1>Войти в систему</h1>
    <form @submit.prevent="onSubmit">
        <v-text-field v-model="name"
            :error-messages="nameErrors"
            :counter="20" label="Имя"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
        ></v-text-field>

        <v-text-field v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
        ></v-text-field>

        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Пароль"
            hint="Не менее 8 символов"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        <p>
            <nuxt-link to="/">На главную страницу</nuxt-link>
        </p>
        <v-btn class="mr-4" type='submit'>Войти</v-btn>
        <v-btn @click="clear">Очистить</v-btn>
    </form>
</section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    layout: 'empty',
    validations: {
        name: { required, maxLength: maxLength(20) },
        email: { required, email },
        password: { required }
    },
    data: () => ({
        email: '',
        name: '',
        password: '',
        show1: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Минимальное значение 8 символов',
        }
    }),
    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Имя должно содержать не более 20 символов')
        !this.$v.name.required && errors.push('Имя обязательно.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Должен быть действительный e-mail')
        !this.$v.email.required && errors.push('E-mail обязательно')
        return errors
      },
    },
    methods: {
        onSubmit() {
            this.$v.$touch()
            this.$store.dispatch('login')
            this.$router.push('/profile')
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.password = ''
        },
    }
}
</script>

<style scoped>
form {
    width: 500px;
    margin: 0px auto;
}
</style>
