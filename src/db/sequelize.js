import { Sequelize } from "sequelize"

const { PGPORT, PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST } = process.env
const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
    host: PGHOST,
    dialect: "postgre"

})

const testConnection = async () => {
    try {
        await sequelize.authenticate().then(() => {
            console.log("db is authenticated")
        })
    } catch (error) {
        console.log(error)
    }
}
testConnection()

export default sequelize