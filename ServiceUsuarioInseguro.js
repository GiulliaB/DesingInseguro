import UserInseguro from './ModelUsuarioInseguro.js';

let users = [];
let nextId = 1;

export function createUser(name, email, password) {
    const user = new UserInseguro(nextId++, name, email, password);
    users.push(user);
    return user;
}

export function getUsers() {
    return users;
}

export function getUserById(id) {
    return users.find(u => u.id === Number(id));
}

export function updateUser(id, name, email, password) {
    const user = getUserById(id);
    if (user) {
        user.name = name;
        user.email = email;
        user.password = password;
    }
    return user;
}

export function deleteUser(id) {
    users = users.filter(u => u.id !== Number(id));
}
