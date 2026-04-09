import express from 'express';
import { body, validationResult } from 'express-validator';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from './ServiceUsuarioSeguro.js';

const router = express.Router();

router.post('/',
    body('name').isString().notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;
        const user = await createUser(name, email, password);
        res.status(201).json({ id: user.id, name: user.name, email: user.email });
    }
);

router.get('/', (req, res) => {
    const users = getUsers().map(u => ({ id: u.id, name: u.name, email: u.email }));
    res.json(users);
});

router.get('/:id', (req, res) => {
    const user = getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario não encontrado.' });
    res.json({ id: user.id, name: user.name, email: user.email });
});

router.put('/:id',
    body('name').optional().isString().notEmpty(),
    body('email').optional().isEmail(),
    body('password').optional().isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;
        const user = await updateUser(req.params.id, name, email, password);
        if (!user) return res.status(404).json({ error: 'Usuario não encontrado.' });
        res.json({ id: user.id, name: user.name, email: user.email });
    }
);

router.delete('/:id', (req, res) => {
    deleteUser(req.params.id);
    res.status(204).send();
});

export default router;
