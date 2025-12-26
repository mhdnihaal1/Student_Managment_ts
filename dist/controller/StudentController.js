"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editpost = exports.editpage = exports.studentdelete = exports.createStudent = exports.getStudents = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Student_1 = __importDefault(require("../model/Student"));
const getStudents = async (req, res) => {
    try {
        const students = await Student_1.default.find();
        res.render('student', { students });
    }
    catch (error) {
        res.status(500).send(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};
exports.getStudents = getStudents;
const createStudent = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const { name, age, grade } = req.body;
        if (!name || !age || !grade) {
            return res.status(400).send('Missing required fields');
        }
        const newStudent = new Student_1.default({ name, age, grade });
        await newStudent.save();
        console.log('Student saved successfully');
        res.redirect('/student');
    }
    catch (error) {
        console.error('Error saving student:', error);
    }
};
exports.createStudent = createStudent;
const studentdelete = async (req, res) => {
    try {
        const { id } = req.body;
        console.log('Request body:', req.body);
        if (!id) {
            return res.status(400).send('Student ID is required');
        }
        const student = await Student_1.default.findOneAndDelete({ _id: id });
        if (student) {
            return res.status(200).json({ message: ' ok' });
        }
        console.log('Deleted student:', student);
        res.redirect('/students');
    }
    catch (error) {
        console.error('Error deleting student:', error);
    }
};
exports.studentdelete = studentdelete;
const editpage = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);
        const students = await Student_1.default.findOne({ _id: id });
        res.render('edit', { students });
    }
    catch (error) {
        res.status(500).send(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};
exports.editpage = editpage;
const editpost = async (req, res) => {
    try {
        const { id, name, age, grade } = req.body;
        const numericAge = Number(age);
        const numericGrade = Number(grade);
        let objectId;
        try {
            objectId = new mongoose_1.default.Types.ObjectId(id);
        }
        catch (error) {
            return res.status(400).send('Invalid ID format');
        }
        console.log(typeof objectId, typeof name, typeof numericAge, typeof numericGrade);
        const updatedStudent = await Student_1.default.findOneAndUpdate({ _id: objectId }, { name, age: numericAge, grade: numericGrade }, { new: true, runValidators: true });
        res.redirect('/student');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server error'); // Send a server error response
    }
};
exports.editpost = editpost;
