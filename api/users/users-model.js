const db = require('../../data/db-config')

async function find() {
  const user = await db('users').select('user_id', 'username')
  return user
}


function findBy(filter) {
  return db('users').where(filter)
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
async function findById(user_id) {
  const user = await db('users').select('user_id', 'username').where('user_id', user_id).first()
  return user
}

/**
  resolves to the newly inserted user { user_id, username }
 */
async function add(user) {
  return await db('users').insert(user)
    .then(([user_id]) => {
      return findById(user_id)
    })
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  find,
  findBy,
  findById,
  add
}