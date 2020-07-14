import React, { useState, useEffect } from 'react';

import edit from "../../assets/edit.png";
import trash from "../../assets/trash.png";
import styles from "./Students.module.css";
import { Link } from 'react-router-dom';

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await fetch("http://localhost:5000/students");
            const students = await response.json();
            setStudents(students.students);
        }
        fetchStudents();
    }, []);

    const editHandler = (id) => {

    }

    const deleteHandler = async (id) => {
        const updatedStudents = students.filter(student => student._id !== id);
        setStudents(updatedStudents);
        await fetch(`http://localhost:5000/students/${id}`, {
            method: 'DELETE'
        });
    }
    return (
        <div className={styles.studentsContainer}>
            <div className={styles.studentsHeader}>
                <Link to="/students" className={styles.heading}>Students</Link>
                <Link to="/addstudent" className={styles.addStudentBtn}>Add a Student</Link>
            </div>
            <div className={styles.studentsBody}>
                {students.map(student => {
                    return (
                        <div key={student._id} className={styles.studentCard}>
                            <div className={styles.studentAvatar}>
                                <img onClick={editHandler.bind(null, student._id)} src={edit} alt="Edit" className={styles.editBtn}/>
                                <img onClick={deleteHandler.bind(null, student._id)} src={trash} alt="Delete" className={styles.deleteBtn}/>
                            </div>
                            <div className={styles.studentInfo}>
                                <h1 className={styles.studentName}>{student.name}</h1>
                                <p className={styles.studentAge}><span className={styles.bold}>Age:</span> {student.age}</p>
                                <p className={styles.studentClass}><span className={styles.bold}>Class:</span> {student.standard}<sup>th</sup></p>
                                <p className={styles.studentRollNumber}><span className={styles.bold}>Roll No.:</span> {student.rollNumber}</p>
                                <p className={styles.studentSchool}><span className={styles.bold}>School:</span> {student.school}</p>
                                <p className={styles.studentCity}><span className={styles.bold}>City:</span> {student.city}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Students;
