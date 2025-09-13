exports.up = async knex => {
  await knex.schema
    .alterTable('users', table => {
      table.text('yandexTelemostUrl')
    })
}

exports.down = knex => { }
