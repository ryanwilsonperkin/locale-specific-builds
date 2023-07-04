const path = require('path');

module.exports = function (env) {
  const locale = env.locale || 'en';

  return {
    output: {
      path: path.resolve(__dirname, 'dist', locale),
    },
    resolve: {
      alias: {
        './translations': `./translations/${locale}.json`,
      },
    },
  }
}
