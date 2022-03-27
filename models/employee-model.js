const employeeModel = (sequelizing, sequelize) => {
    const Employees = sequelizing.define('companies', {
        id: {
            type: sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                len: { args: [1, 10] }
            }
        },
        name: { 
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                len: { args: [2, 50] }
            }
        },
        email: { 
            type: sequelize.STRING,
            allowNull: false,
            validate: {
                len: { args: [5, 255] }
            }
        },
        phone_number: { 
            type: sequelize.STRING,
            defaultValue: null,
            allowNull: true,
            validate: {
                len: { args: [8, 16] }
            }
        },
        jobtitle: { 
            type: sequelize.ENUM('manager', 'director', 'staff'),
            defaultValue: 'staff',
            allowNull: false
        }
    })
    return Employees
}

module.exports = employeeModel