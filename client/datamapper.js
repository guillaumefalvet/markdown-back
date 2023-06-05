const client = require('./pg');

module.exports = {
  async getOne() {
    const { rows } = await client.query('SELECT * FROM markdown WHERE id = 1;');
    return rows[0].content;
  },
};
