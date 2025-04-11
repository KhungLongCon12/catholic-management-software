import { Model, DataTypes, Optional, Sequelize } from "sequelize";

interface RoleAttributes {
  id: number;
  name: string;
  description: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<RoleAttributes, "id"> {}

export class Role
  extends Model<RoleAttributes, UserCreationAttributes>
  implements RoleAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public isActive?: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;

  static initialize(sequelize: Sequelize) {
    Role.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        tableName: "roles",
      }
    );
  }
}
