module.exports = {
  database: async () => {
    let force = sails.config.db.force;
    await db.sequelize.sync({force});
  }
}
