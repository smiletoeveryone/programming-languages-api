const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "db4free.net",
    user: "your_username",
    password: "your_password",
    database: "name_of_database",
  },
  listPerPage: 20,
};
module.exports = config;
