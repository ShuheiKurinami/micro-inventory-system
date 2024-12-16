import { createUser, getAllUsers } from '../models/user.model.js';
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = { name, email, password };
        const newUser = await createUser(user);
        res.status(201).json({ message: 'User created', user: newUser });
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
export const listUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
