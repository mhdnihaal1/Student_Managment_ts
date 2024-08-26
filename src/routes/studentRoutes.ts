import express from 'express';
import { getStudents, createStudent,studentdelete ,editpage,editpost} from '../controller/StudentController';

const router = express.Router();



router.get('/student', getStudents);
router.post('/student', createStudent);
router.post('/studentdelete',studentdelete)

router.get('/edit',editpage)
router.post('/edit',editpost)


export default router;
