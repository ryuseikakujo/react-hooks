import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import OperationLog from "./OperationLog";

const OperationLogs = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4>Log List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Content</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => {
            return <OperationLog key={index} operationLog={operationLog} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
