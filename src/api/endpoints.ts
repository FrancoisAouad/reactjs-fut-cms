export default () => ({
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  articles: {
    create: { method: 'POST', url: '/articles' },
    update: { method: 'PATCH', url: '/article/:id' },
    delete: { method: 'DELETE', url: '/article/:id' },
    deleteList: { method: 'DELETE', url: '/article?ids' },
    getAll: { method: 'GET', url: '/articles' },
    getById: { method: 'GET', url: '/articles/:id' },
    tags: {
      create: { method: 'POST', url: '/articles/tags' },
      update: { method: 'PATCH', url: '/article/tags/:id' },
      delete: { method: 'DELETE', url: '/article/tags/:id' },
      deleteList: { method: 'DELETE', url: '/article/tags?ids' },
      getAll: { method: 'GET', url: '/articles/tags' },
      getById: { method: 'GET', url: '/articles/tags/:id' },
    },
    categories: {
      create: { method: 'POST', url: '/articles/categories' },
      update: { method: 'PATCH', url: '/article/categories/:id' },
      delete: { method: 'DELETE', url: '/article/categories/:id' },
      deleteList: { method: 'DELETE', url: '/article/categories?ids' },
      getAll: { method: 'GET', url: '/articles/categories' },
      getById: { method: 'GET', url: '/articles/categories/:id' },
    },
  },
  users: {
    createCMSuser: { method: 'POST', url: '/cms/users' },
    deleteCMSUser: { method: 'DELETE', url: '/cms/users/:id' },
    updateCMSUser: { method: 'PATCH', url: '/cms/users/:id' },
  },
  profiles: {
    create: { method: 'POST', url: '/profiles/cms' },
    update: { method: 'PATCH', url: '/profiles/cms/:id' },
  },
  auth: {
    login: { method: 'POST', url: '/auth/login' },
    forgotPassword: { method: 'POST', url: '/auth/forgot-password' },
    resetPassword: { method: 'PATCH', url: '/auth/reset-password' },
    refreshToken: { method: 'POST', url: '/auth/refresh-token' },
    logout: { method: 'DELETE', url: '/auth/logout' },
  },
});
