<template>
<div>
    <h1>Login Page </h1>
    <Errors v-if="errors" :msg='errors'/>
    <div class="row">
        <div class="card mx-auto">
            <div class="card-header text-white bg-success">
                <h3>Login</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="LoginUser()">
                    <div class="form-group">
                        <label class="m-2 float-left" for="username">Username: </label>
                        <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
                        v-model="username"
                        class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <label class="m-2 float-left" for="username">Password: </label>
                        <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        v-model="password"
                        class="form-control"
                        >
                    </div>
                    <input type="submit" class=" float-left btn btn-primary" value="Login"/>
                    <router-link class="nav-link" tag='a' to="/signin">Need an Account?</router-link>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Errors from '../components/Errors'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    Errors: Errors
  },
  computed: {
    ...mapGetters(['errors'])
  },
  methods: {
    ...mapActions(['login']),
    LoginUser () {
      const user = {
        username: this.username,
        password: this.password
      }
      this.login(user).then(res => {
        if (res.data.success) {
          this.$router.push('/profile')
        }
      })
    }
  }
}
</script>

<style scoped>
.card{
    width:60;
    border-radius: 0 ;
}
.form-control{
    border-radius:0;
}
</style>
