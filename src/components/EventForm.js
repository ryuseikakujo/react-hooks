import React, { useState, useContext } from "react";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";
import operationLogs from "../reducers/operationLogs";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "Create an event",
      operatedAt: timeCurrentIso8601(),
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "Are you sure you want to delete all events?"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
        description: "Delete all events",
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const unCreatable = title === "" || body === "";

  const deleteOperationLogs = (e) => {
    e.preventDefault();
    const result = window.confirm("Are you sure you want to delete all logs?");
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      });
    }
  };

  return (
    <>
      <h4>Event Form</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          Create event
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          Delete all event
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteOperationLogs}
          disabled={state.operationLogs.length === 0}
        >
          Delete all logs
        </button>
      </form>
    </>
  );
};

export default EventForm;
