import User from './ModelUsuario.js';
import bcrypt from 'bcrypt';

let users = [];
let nextId = 1;

export async function createUser(name, email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User(nextId++, name, email, passwordHash);
    users.push(user);
    return user;
}

export function getUsers() {
    return users;
}

export function getUserById(id) {
    return users.find(u => u.id === Number(id));
}

export async function updateUser(id, name, email, password) {
    const user = getUserById(id);
    if (user) {
        user.name = name;
        user.email = email;
        if (password) {
            user.passwordHash = await bcrypt.hash(password, 10);
        }
    }
    return user;
}

export function deleteUser(id) {
    users = users.filter(u => u.id !== Number(id));
}
