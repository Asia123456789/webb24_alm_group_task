const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

let sequelize;

if (process.env.NODE_ENV === "test") {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME || "postgres",
    process.env.DB_USER || "postgres",
    process.env.DB_PASS || "postgres",
    {
      host: process.env.DB_HOST || "db",
      dialect: "postgres",
      port : process.env.DB_PORT || 5432,
      logging: false,
    }
  );
}

module.exports = sequelize;
