"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const conn = await mongoose_1.default.connect('mongodb+srv://nihalmuhaednihal_db_user:Sxfg0fjhMEUttewc@cluster0.9oc3j0l.mongodb.net/students-managment?retryWrites=true&w=majority');
        console.log(`MongoDB connected: ${conn.connection.host}`);
        console.log('MongoDB connected');
    }
    catch (error) {
        console.error(`Error: ${error instanceof Error ? error.message : `error${error.message}`}`);
        process.exit(1);
    }
};
exports.default = connectDB;
