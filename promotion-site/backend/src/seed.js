import faker from 'faker'


let userData = []

const generateUser = () => { 
    for (let i=0; i<50; i++) { 
        const email = faker.internet.email()
        const password = faker.internet.password()
        const user = {
            email, password
        }
        userData.push(user)
    }
    return userData
}

generateUser()

const UserMutation = `mutation { ${userData.map((user, index) => `user${index} createUser(data: ${user})`).join(' ')} }`

export default UserMutation