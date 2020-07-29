import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" />
        </div>
        <button className="btn btn-primary">Delete event</button>
        <button className="btn btn-danger">Delete all event</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
