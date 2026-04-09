import { createUser, getUsers, getUserById, updateUser, deleteUser } from './ServiceUsuarioInseguro.js';
import express from 'express';

const router = express.Router();
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    const user = createUser(name, email, password);
    res.status(201).json(user);
});

router.get('/', (req, res) => {
    res.json(getUsers());
});

router.get('/:id', (req, res) => {
    const user = getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario não encontrado.' });
    res.json(user);
});

router.put('/:id', (req, res) => {
    const { name, email, password } = req.body;
    const user = updateUser(req.params.id, name, email, password);
    if (!user) return res.status(404).json({ error: 'Usuario não encontrado.' });
    res.json(user);
});

router.delete('/:id', (req, res) => {
    deleteUser(req.params.id);
    res.status(204).send();
});

export default router;
