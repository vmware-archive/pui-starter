const {Actions} = require('p-flux');

module.exports = {
  post(url, body) {
    Actions.updateMenu(body);
  }
};