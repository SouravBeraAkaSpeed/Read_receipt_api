import path from "path"


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const uploadBody = async (req, res) => {
    const { timestamp } = req.params;
    const post = req.body;
    console.log(timestamp)
    console.log(post)
}

export const welcomeRoute = async (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../index.html'));
}