import { Sequelize } from "sequelize";

export const db = new Sequelize('postgresql://osmait:123456@localhost:5432/animes')
