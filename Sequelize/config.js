import { Sequelize } from 'sequelize';

 const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432, // PostgreSQL default port
  username: 'postgresUser',
  password: 'Dido18234@',
  database: 'postgres',
});

export default sequelize;
