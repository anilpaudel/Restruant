var keystone = require('keystone');
console.log('awesome')
keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'my-project',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'views': 'templates/views',
  'view engine': 'pug',
});
keystone.import('models');
keystone.set('routes', require('./routes'));


console.log('lovely');
keystone.start();
