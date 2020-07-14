import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./AddStudent.module.css";

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    standard: "",
    rollNumber: "",
    school: "",
    city: "",
  });
  const history = useHistory();

  const inputChangeHandler = (event) => {
    setStudentData({ ...studentData, [event.target.name]: event.target.value });
    console.log(studentData);
  };

  const addStudentHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
    history.push("/students");
  };

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Add a Student</h1>
      <form
        className={styles.studentFormContainer}
        onSubmit={addStudentHandler}
      >
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={studentData.name}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
          value={studentData.age}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter Class"
          name="standard"
          value={studentData.standard}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter Roll Number"
          name="rollNumber"
          value={studentData.rollNumber}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter School"
          name="school"
          value={studentData.school}
          onChange={inputChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Enter City"
          name="city"
          value={studentData.city}
          onChange={inputChangeHandler}
          required
        />
        <button className={styles.addStudentBtn} type="submit">
          Add Student
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddStudent;
