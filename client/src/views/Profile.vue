<template>
  <div>
      <h1>Profile Page</h1>
      <div class="card m-auto" style="width: 22rem;">
        <ul class="list-group">
          <li class="list-group-item p-3">Email: <span class="font-weight-bold">{{user.email}}</span></li>
          <li class="list-group-item p-3">Username: <span class="font-weight-bold">{{user.username}}</span></li>
          <li class="list-group-item p-3">Name: <span class="font-weight-bold">{{user.name}}</span></li>
        </ul>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['getProfile'])

  },
  created () {
    this.getProfile()
  }
}
</script>

<style>

</style>
