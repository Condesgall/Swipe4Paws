import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Shelter from './ShelterModel';
import PetBehavior from './PetBehaviorModel';

class Pet extends Model {
    private petid!: number;
    private gender!: 'Male' | 'Female' | 'Unknown';
    private age!: number;
    private date_added!: Date;
    private race!: string;
    private shelterid!: number;
}

Pet.init(
    {
        petid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        shelterid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date_added: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        name: DataTypes.STRING(70),
        gender: DataTypes.ENUM('Female', 'Male', 'Unknown'),
        age: DataTypes.INTEGER,
        race: DataTypes.STRING(70)
    },
    {
        sequelize,
        tableName: 'pet',
        timestamps: true,
        createdAt: 'date_added',
        updatedAt: false,
    }
);

Pet.belongsTo(Shelter, { foreignKey: 'shelterid' });
Pet.hasMany(PetBehavior, { foreignKey: 'petid' });


export default Pet;