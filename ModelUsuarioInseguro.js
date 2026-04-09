// Modelo inseguro (sem validação, sem hash de senha)
export default class UserInseguro {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
