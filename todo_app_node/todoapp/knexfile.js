// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: "todo_app",
      user: "root",
      password: "$Yuto1124",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      database: "todo_app",
      user: "root",
      password: "$Yuto1124",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: "todo_app",
      user: "root",
      password: "$Yuto1124",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
