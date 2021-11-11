import PasswordHolder from "../models/passwordHolder.js";

export const getHolders = async (req, res) => {
    try {
        const passwordHolders = await PasswordHolder.find();

        res.status(200).json(passwordHolders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createHolder = async (req, res) => {
    const holder = req.body;

    const newHolder = new PasswordHolder(holder);

    try {
        await newHolder.save();

        res.status(201).json(newHolder);
    } catch (error) {
        res.status(409).json( { message: error.message })
    }
}