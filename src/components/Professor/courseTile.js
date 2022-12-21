import style from "../../styles/manage.module.css";
//import inputStyle from "../../styles/inputBox.module.css";
import styles from "../../styles/index.module.css";
import Collapsible from "react-collapsible";
import PropTypes from "prop-types";
import useStudents from "../../hooks/useStudents";
import { addStudent, removeStudent } from "../../utils/firebase-utils.mjs";
import { useState } from "react";
import "react-awesome-button/dist/styles.css";
import { AwesomeButton } from "react-awesome-button";
// eslint-disable-next-line quotes
import { Icon } from "@iconify/react";
// eslint-disable-next-line quotes
import cancelIcon from "@iconify/icons-material-symbols/cancel";
import { useUser } from "../../contexts/UserContext";

export default function CourseTile({ course }) {
  const [email, setEmail] = useState();
  const user = useUser();

  let newStudent = {email: email, prof: user.email}
  const students = useStudents(course);
  
  let exclusive = students.filter(function (student)
    {
      return student.prof === user.email;
    }
  );

  const studentList = exclusive.map((s) => (
    <li className={style.li} key={s}>
      {s.email} {"    "}
      <Icon
        icon={cancelIcon}
        width="25"
        height="20"
        color="red"
        onClick={() => removeStudent(course, s)}
        inline
      />
    </li>
  ));

  return (
    <div key={course} className={style.coursetile}>
      <Collapsible trigger={`${course} Roster`}>
        <ul>
          {studentList}

          <li className={style.li} key="add">
            <input
              type="text"
              // value={answer}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Enter student email"
              className={styles.inputProf}
            />
            <div className={styles.divider} />
            {/* <button onClick={() => addStudent(course, email)}> add </button> */}
            <AwesomeButton
              type="secondary"
              onReleased={() => addStudent(course, newStudent)}
            >
              Add
            </AwesomeButton>
          </li>
        </ul>
      </Collapsible>
    </div>
  );
}

CourseTile.propTypes = {
  course: PropTypes.string,
};
