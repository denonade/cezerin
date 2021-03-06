// config used by server side only
const NODE_SERVER_PORT = 3000;
const NODE_SERVER_HOST = '127.0.0.1';

module.exports = {
  // used by Store (server side)
  apiBaseUrl: `http://${NODE_SERVER_HOST}:${NODE_SERVER_PORT}/api/v1`,

  // used by Store (server and client side)
  ajaxBaseUrl: `http://${NODE_SERVER_HOST}:${NODE_SERVER_PORT}/ajax`,

  // used by API
  adminLoginUrl: '/admin/login',

  listenPort: NODE_SERVER_PORT,

  // used by API
  mongodbServerUrl: 'mongodb://127.0.0.1:27017/shop',

  smtpServer: {
    host: '',
    port: 0,
    secure: true,
    user: '',
    pass: '',
    fromName: '',
    fromAddress: ''
  },

  // key to sign tokens
  jwtSecretKey: '-',

  // key to sign store cookies
  cookieSecretKey: '-',

  // path to uploads
  categoriesUploadPath: 'public/content/images/categories',
  productsUploadPath: 'public/content/images/products',
  filesUploadPath: 'public/content',
  themeAssetsUploadPath: 'theme/assets/images',

  // url to uploads
  categoriesUploadUrl: '/images/categories',
  productsUploadUrl: '/images/products',
  filesUploadUrl: '',
  themeAssetsUploadUrl: '/assets/images',

  // store UI language
  language: 'en',

  // used by API
  orderStartNumber: 1000
}
