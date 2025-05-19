exports.up = async knex => {
  await knex.schema.raw(`
  ALTER TABLE "users"
  ALTER COLUMN "telegramChatId" TYPE TEXT
`)
}

exports.down = knex => { }
