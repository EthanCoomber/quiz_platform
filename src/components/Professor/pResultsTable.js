import useAllresults from "../../hooks/useAllresults";
import PropTypes from "prop-types";
import useTopics from "../../hooks/useTopics";
import Select from "react-select";
import { useState } from "react";
import styles from "../../styles/topics.module.css";
import tableStyles from "../../styles/ResultsTable.module.css";
import { useUser } from "../../contexts/UserContext";

export default function PResultsTable({ course }) {
  const [selected, setSelected] = useState();
  const user = useUser();

  const allTopics = useTopics(course);
  const topicsOptions = [];

  allTopics.forEach((t) => {
    const newObj = {};
    newObj["value"] = t;
    newObj["label"] = t;
    topicsOptions.push(newObj);
  });

  function handleSelect(data) {
    setSelected(data.value);
  }

  const results = useAllresults(course);

  const filteredResults = results.filter((res) => {
    return res[selected] !== undefined;
  });

  let exclusive = filteredResults.filter(function (result)
    {
      return result.student === user.email;
    }
  );

  const resultsTable = exclusive.map((val) => (
    <tr key={val.id}>
      <td> {val.date} </td>
      <td> {val.student} </td>
      <td>{val[selected]}</td>
    </tr>
  ));

  return (
    <div>
      <div className={styles.multiselect}>
        <Select
          options={topicsOptions}
          placeholder="Select topic to view past results"
          value={selected}
          isSearchable
          onChange={handleSelect}
          isMulti={false}
        />
      </div>
      <p> </p>
      {selected && (
        <div className={tableStyles.table}>
          <table>
            <tr>
              <th> Date </th>
              <th> Student </th>
              <th> {selected} </th>
            </tr>
            {resultsTable}
          </table>
        </div>
      )}
    </div>
  );
}

PResultsTable.propTypes = {
  userID: PropTypes.string,
  course: PropTypes.string,
};
