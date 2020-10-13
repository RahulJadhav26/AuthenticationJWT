import axios from 'axios'
import router from '../router'

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
  errors: null
}

const getters = {
  isLoggedIn: state => {
    if (state.token !== '') {
      return true
    } else {
      return false
    }
  },
  authState: state => state.status,
  user: state => state.user,
  errors: state => state.errors
}

const actions = {
  // Login Action
  async login ({ commit }, user) {
    commit('auth_request')
    try {
      const res = await axios.post('/api/users/login', user)
      if (res.data.success) {
        const token = res.data.token
        const user = res.data.user

        // Store the token in the localStorage
        localStorage.setItem('token', token)

        axios.defaults.headers.common.Authorization = token
        commit('auth_success', token, user)
      }
      return res
    } catch (err) {
      commit('auth_error', err)
    }
  },
  // Register User
  async register ({ commit }, userData) {
    commit('register_request')
    try {
      const res = await axios.post('/api/users/register', userData)
      if (res.data.success !== undefined) {
        commit('register_success')
      } else {
        console.log('Error at Actions')
      }
      return res
    } catch (err) {
      commit('register_error', err)
    }
  },
  // Get the user Profile

  async getProfile ({ commit }) {
    commit('profile_request')
    const res = await axios.get('/api/users/profile')
    commit('user_profile', res.data.user)
    return res
  },

  // logout User
  async logout ({ commit }) {
    await localStorage.removeItem('token')
    commit('logout')
    delete axios.defaults.headers.common.Authorization
    router.push('/login')
  }

}

const mutations = {
  auth_request (state) {
    state.error = null
    state.status = 'loading'
  },
  auth_success (state, token, user) {
    state.error = null
    state.token = token
    state.user = user
    state.status = status
  },
  auth_error (state, err) {
    state.errors = err.response.data.msg
  },
  register_request (state) {
    state.error = null
    state.status = 'loading'
  },
  register_success (state) {
    state.error = null
    state.status = 'success'
  },
  register_error (state, err) {
    state.errors = err.response.data.msg
  },
  profile_request (state) {
    state.error = null
    state.status = 'Requesting'
  },
  user_profile (state, user) {
    state.error = null
    state.user = user
  },
  logout (state) {
    state.error = null
    state.token = ''
    state.status = ''
    state.users = {}
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
