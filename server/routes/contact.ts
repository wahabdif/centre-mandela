import { Router } from 'express';
import * as contact from '../controllers/contact';
import { Request, Response } from 'express';

const router = Router();

router.get('/', contact.getMessages);
router.post('/', contact.sendMessage);

export default router;
// Example implementation for getMessages
export function getMessages(req: Request, res: Response) {
    // This would normally fetch messages from a database
    const messages = [
        { id: 1, name: 'Alice', message: 'Hello!' },
        { id: 2, name: 'Bob', message: 'Hi there!' }
    ];
    res.json(messages);
}

export function sendMessage(req: Request, res: Response) {
    const { name, message } = req.body;
    if (!name || !message) {
        return res.status(400).json({ error: 'Name and message are required.' });
    }
    // Here you would normally save the message to a database
    // For demonstration, just echo back the message with a fake id
    const newMessage = {
        id: Date.now(),
        name,
        message
    };
    res.status(201).json(newMessage);
}