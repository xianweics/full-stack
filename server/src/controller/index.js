// const query = require('../database/query');
// const {getFavorite, addFavorite} = require('../database/sql');
export default {
  getUsers: ctx => {
    return ctx.body = {
      code: 200,
      data: {
        page: 1,
        pageSize: 10,
        total: 10,
        data: [
          {
            id: 1,
            name: 'test1'
          },
          {
            id: 2,
            name: 'test2'
          }
        ]
      }
    };
  },
  getMembers: ctx => {
    return ctx.body = {
      code: 200,
      data: {
        page: 1,
        pageSize: 10,
        total: 10,
        data: []
      }
    };
  }
};