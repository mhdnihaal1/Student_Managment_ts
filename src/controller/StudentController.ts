import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Student from '../model/Student';

export const getStudents = async (req: Request, res: Response) => {
  try {

    const students = await Student.find();
    
    res.render('student',{ students });
  } catch (error) {
    res.status(500).send(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

export const createStudent = async (req: Request, res: Response) => {
    try {
      console.log('Request body:', req.body);
  
      const { name, age, grade } = req.body;
  
      if (!name || !age || !grade) {
        return res.status(400).send('Missing required fields');
      }
  
      const newStudent = new Student({ name, age, grade });

      
      await newStudent.save();
      console.log('Student saved successfully');
  
      res.redirect('/student');
    } catch (error) {
      console.error('Error saving student:', error);
    }
  };


  export const studentdelete = async (req: Request, res: Response) => {
    try {
        const { id } = req.body; 
        console.log('Request body:', req.body);

        if (!id) {
            return res.status(400).send('Student ID is required');
        }

        const student = await Student.findOneAndDelete({ _id: id });

        if (student) {
            return res.status(200).json({ message:' ok'});
        }

        console.log('Deleted student:', student);

        res.redirect('/students');
    } catch (error) {
        console.error('Error deleting student:', error);
    }
};




export const editpage = async (req: Request, res: Response) => {
    try {
        const {id } = req.query;
        console.log(id)
  
      const students = await Student.findOne({_id:id});
      
      res.render('edit',{ students });
    } catch (error) {
      res.status(500).send(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  

  

  
  export const editpost = async (req: Request, res: Response) => {
      try {
          const { id, name, age, grade } = req.body;
  
          const numericAge = Number(age);
          const numericGrade = Number(grade);
  
          let objectId;
          try {
              objectId = new mongoose.Types.ObjectId(id);
          } catch (error) {
              return res.status(400).send('Invalid ID format');
          }
  
          console.log(typeof objectId, typeof name, typeof numericAge, typeof numericGrade);
  
          const updatedStudent = await Student.findOneAndUpdate(
              { _id: objectId }, 
              { name, age: numericAge, grade: numericGrade }, 
              { new: true, runValidators: true } 
          );
  res.redirect('/student')

      } catch (error) {
          console.error(error); 
          res.status(500).send('Server error'); // Send a server error response
      }
  };
  