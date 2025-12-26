"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const db_1 = __importDefault(require("./db"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const app = (0, express_1.default)();
const PORT = 3003;
(0, db_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use('/', studentRoutes_1.default);
// app.get('/', (req, res) => {
//     res.send('Hello World');
//   });
app.use((req, res) => {
    res.status(404).send('There is an error on index');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
