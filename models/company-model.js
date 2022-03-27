const companyModel = (sequelizing, sequelize) => {
    const Companies = sequelizing.define('companies', {
        id: {
            type: sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                len: { args: [1, 10] }
            }
        },
        company_name: { 
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                len: { args: [3, 50] }
            }
        },
        telephone_number: { 
            type: sequelize.STRING,
            allowNull: true,
            defaultValue: null,
            validate: {
                len: { args: [8, 16] }
            }
        },
        is_active: { 
            type: sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        address: { 
            type: sequelize.STRING,
            allowNull: true,
            validate: {
                len: { args: [1, 50] }
            }
        }
    })
    return Companies
}

module.exports = companyModel