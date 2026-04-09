// Modelo seguro (com validação e hash de senha)
export default class User {
    constructor(id, name, email, passwordHash) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
    }
}
