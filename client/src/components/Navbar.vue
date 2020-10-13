<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Authentication</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
          <router-link
          tag="a"
          class="nav-link"
          to="/">
          Home
          </router-link>
      </li>
      <li class="nav-item">
        <router-link
          tag="a"
          class="nav-link"
          to="/about">
          About
          </router-link>
      </li>
      <li class="nav-item">
        <router-link
          tag="a"
          class="nav-link"
          to="/profile"
          v-if="isLoggedIn"
          >
          Profile
          </router-link>
      </li>
      <li class="nav-item">
        <router-link
          tag="a"
          class="nav-link"
          to="/signin"
          v-if="!isLoggedIn"
          >
          Sign In
          </router-link>
      </li>
      <li class="nav-item">
        <router-link
          tag="a"
          class="nav-link"
          to="/login"
          v-if="!isLoggedIn"
          >
          Login
          </router-link>
      </li>
      <li class="nav-item">
        <a v-if="isLoggedIn" to='/logout' class="nav-link" @click.prevent="LogoutUser">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout']),
    LogoutUser () {
      console.log('logoutClicked')
      this.logout()
    }
  }
}
</script>

<style>

</style>
