import React, { useState, useEffect } from "react";
import Axios from "../Axios/Axios";
import Pagination from "./Pagination";

const Fetch = () => {
  let [state, setState] = useState([]);
  let [filtered, setFiltered] = useState([]);
  let [pageNum, setPageNum] = useState(0);
  let perPage = 10;
 let pageCount = Math.ceil(state.length / perPage);
let visited = perPage * pageNum;
let displayData = state.slice(visited, visited + perPage).map(val => (
  <tr>
    <td>{val.id}</td>
    <td>{val.title}</td>
    <td>{val.userId}</td>
  </tr>
));
console.log(displayData);
useEffect(() => {
  let fetchData = async () => {
    let { data } = await Axios.get("todos");
    try {
      setState(data);
    } catch (error) {}
  };
  fetchData();
}, []);
  let handleNext = () => {
      setPageNum(pageNum+1)
  }
    let handlePre = () => {
      setPageNum(pageNum -1);
  };
  let handleFirst = () => {
      setPageNum(0)
  }
  let handleLast = () => {
      setPageNum(pageCount-1)
  }
console.log(state);

 

  return (
    <div className="m-auto  text-3xl">
      <table className=" w-[80%] m-auto border-8">
        <thead className="ml-14">
          <tr className="bg-slate-900 text-white text-lg border-8">
            <td>ID</td>
            <td>TITLE</td>
            <td>USERID</td>
          </tr>
        </thead>
        <tbody className="bg-slate-900 text-white">{displayData}</tbody>
      </table>
      <div className="flex justify-between m-auto w-[80%] ">
        <button onClick={handleFirst} className="bg-slate-900 text-white">
          First
        </button>

        <button
          onClick={handlePre}
          className="bg-slate-900 text-white rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-slate-900 text-white rounded-md"
        >
          Next
        </button>
        <button
          onClick={handleLast}
          className="bg-slate-900 text-white rounded-md"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Fetch;
