export const state = () => ({
  articleCategories: {},
  teamCategories: {},
})

export const mutations = {
  SET_ARTICLE_CATEGORIES (state, categories) {
    state.articleCategories = categories.reduce((acc, curr) => {
      acc[curr.id] = { name: curr.name, code: curr.code }
      return acc
    }, {})
  },

  SET_TEAM_CATEGORIES (state, categories) {
    state.teamCategories = categories.reduce((acc, curr) => {
      acc[curr.id] = { name: curr.name, code: curr.code }
      return acc
    }, {})
  },
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await Promise.all([
      dispatch('getArticleCategories'),
      dispatch('getTeamCategories')
    ])
  },

  async getArticleCategories ({ commit }) {
    const categories = await this.$axios.$get('articles/categories')
    commit('SET_ARTICLE_CATEGORIES', categories)
  },

  async getTeamCategories ({ commit }) {
    const categories = await this.$axios.$get('teams/categories')
    commit('SET_TEAM_CATEGORIES', categories)
  }
}
