"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StudentController_1 = require("../controller/StudentController");
const router = express_1.default.Router();
router.get('/student', StudentController_1.getStudents);
router.post('/student', StudentController_1.createStudent);
router.post('/studentdelete', StudentController_1.studentdelete);
router.get('/edit', StudentController_1.editpage);
router.post('/edit', StudentController_1.editpost);
exports.default = router;
