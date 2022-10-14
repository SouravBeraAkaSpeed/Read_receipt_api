import path from "path"
import receipt from "../models/receipts.js";
import mongoose from "mongoose";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const uploadBody = async (req, res) => {
    const { email } = req.params;
    const entry = {
        "email": email
    }
    const newEntry = new receipt(entry);
    try {
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }


}

export const getreceipt = async (req, res) => {
    try {
        const receipts = await receipt.find();
        res.status(200).json(receipts);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const welcomeRoute = async (req, res) => {
    res.status(201).sendFile(path.join(__dirname, '../index.html'));
}