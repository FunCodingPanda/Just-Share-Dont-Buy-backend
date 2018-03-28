const category = require('../../query/categories.js')

getAll = (fn) => {
  category.getAllCategories()
  .then((res, err) => {
    if(err)
    return fn(null, err)
    console.log("getAll: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}

getById = (id, fn) => {
  category.getById(id)
  .then((res, err) => {
    if (err) {
      return fn(null, err)
    }
    console.log("getById: QueryResult: " + JSON.stringify(res));
    return fn(res, null)
  })
}


module.exports = {
  getAll,
  getById
}