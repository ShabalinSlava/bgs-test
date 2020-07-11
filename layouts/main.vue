<template>
<v-app id="inspire">
    <v-app-bar app color="indigo" dark>
        <v-toolbar-title>Профиль</v-toolbar-title>
        <v-btn @click.prevent="logout" small color="primary">Выйти</v-btn>
    </v-app-bar>

    <v-main>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col class="text-center">
                    <nuxt />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
    <v-footer color="indigo" app>
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
    }),
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

