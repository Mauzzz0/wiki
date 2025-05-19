exports.up = async knex => {
  await knex.schema
    .alterTable('users', table => {
      table.integer('telegramChatId')
    })
}

exports.down = knex => { }
