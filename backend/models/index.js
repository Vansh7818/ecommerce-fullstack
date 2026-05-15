import { Sequelize } from 'sequelize';
import sqlJsAsSqlite3 from 'sql.js-as-sqlite3';
import fs from 'fs';
import path from 'path';

const isUsingRDS =
  process.env.RDS_HOSTNAME &&
  process.env.RDS_USERNAME &&
  process.env.RDS_PASSWORD;

const dbType = process.env.DB_TYPE || 'mysql';

const defaultPorts = {
  mysql: 3306,
  postgres: 5432,
};

const defaultPort = defaultPorts[dbType];

export let sequelize;

if (isUsingRDS) {

  // Production Database (MySQL/Postgres)

  sequelize = new Sequelize({
    database: process.env.RDS_DB_NAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT || defaultPort,
    dialect: dbType,
    logging: false
  });

} else {

  // Local SQLite Database

  sequelize = new Sequelize({
    dialect: 'sqlite',
    dialectModule: sqlJsAsSqlite3,
    logging: false
  });

  // Save database after write operations
  sequelize.addHook('afterCreate', saveDatabaseToFile);
  sequelize.addHook('afterDestroy', saveDatabaseToFile);
  sequelize.addHook('afterUpdate', saveDatabaseToFile);
  sequelize.addHook('afterSave', saveDatabaseToFile);
  sequelize.addHook('afterUpsert', saveDatabaseToFile);
  sequelize.addHook('afterBulkCreate', saveDatabaseToFile);
  sequelize.addHook('afterBulkDestroy', saveDatabaseToFile);
  sequelize.addHook('afterBulkUpdate', saveDatabaseToFile);
}

export async function saveDatabaseToFile() {

  // Create database folder if not exists
  const dbFolderPath = path.join(process.cwd(), 'database');

  if (!fs.existsSync(dbFolderPath)) {
    fs.mkdirSync(dbFolderPath, { recursive: true });
  }

  const dbFilePath = path.join(dbFolderPath, 'database.sqlite');

  const dbInstance = await sequelize.connectionManager.getConnection();

  const binaryArray = dbInstance.database.export();

  const buffer = Buffer.from(binaryArray);

  fs.writeFileSync(dbFilePath, buffer);
}