export const state = () => ({
  articleCategories: {},
})

export const mutations = {
  SET_ARTICLE_CATEGORIES (state, categories) {
    state.articleCategories = categories.reduce((acc, curr) => {
      acc[curr.id] = { name: curr.name, code: curr.code }
      return acc
    }, {})
  },
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await Promise.all([
      dispatch('getArticleCategories'),
    ])
  },

  async getArticleCategories ({ commit }) {
    const categories = await this.$axios.$get('articles/categories')
    commit('SET_ARTICLE_CATEGORIES', categories)
  },
}
