import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
    return (
        <div className={styles.homepageContainer}>
            <h1 className={styles.heading}>Welcome</h1>
            <Link to="/students" className={styles.studentsBtn}>See all students</Link>
        </div>
    );
};

export default Homepage;
