import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import { AuthKeyType } from "../types/auth.key.type.ts";

interface AuthKeyCreationAttributes extends Optional<AuthKeyType, "id" | "status"> {}

class AuthKey extends Model<AuthKeyType, AuthKeyCreationAttributes> implements AuthKeyType {
  public id!: number;
  public access_id!: string;
  public client_id!: string;
  public client_secret!: string;
  public client_name!: string;
  public description?: string;
  public status?: "active" | "inactive" | "expired" | "revoked" | "rotated";
}

export default function createAuthKeyModel(sequelize: Sequelize): typeof AuthKey {
  AuthKey.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      access_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      client_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      client_secret: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      client_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: DataTypes.STRING(255),
      status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "active",
        validate: {
            isIn: [["active", "inactive", "expired", "revoked", "rotated"]],
        },
    },
    },
    {
      sequelize,
      modelName: "AuthKey",
      tableName: "tbl_auth_keys",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: false,
      indexes: [
        {
          name: "idx_access_id",
          fields: ["access_id"],
        },
        {
          name: "idx_client_id",
          fields: ["client_id"],
        },
        // Composite index for queries using both access_id + client_id
        {
          name: "idx_access_client",
          fields: ["access_id", "client_id"],
        },
      ],
    }
  );

  return AuthKey;
}
