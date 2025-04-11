import { Model, DataTypes, Optional, Sequelize } from "sequelize";

interface OAuthAttributes {
  id: number;
  provider: string;
  providerId: string;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface OAuthCreationAttributes extends Optional<OAuthAttributes, "id"> {}

export class OAuth
  extends Model<OAuthAttributes, OAuthCreationAttributes>
  implements OAuthAttributes
{
  public id!: number;
  public provider!: string;
  public providerId!: string;
  public userId!: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  static initialize(sequelize: Sequelize) {
    OAuth.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        provider: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        providerId: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        userId: {
          type: DataTypes.NUMBER,
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
        tableName: "oauth",
      }
    );
  }
}
