import React, { useState, useEffect } from "react";
import Axios from "../Axios/Axios";
import Pagination from "./Pagination";

const Fetch = () => {
  let [state, setState] = useState([]);
  let [filtered, setFiltered] = useState([]);
  

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await Axios.get("todos");
      try {
        setState(data);
        setFiltered(data.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
      console.log(data);
    };
    fetchData();
  }, []);
  let handleClick = (page) => {
    setFiltered(state.slice(page * 10 - 10, page * 10));
  };

  return (
    <section className=" w-[100%] h-[100vh] my-16 justify-center" >
      <article className=" w-[90%] mx-auto">
        
        <table className="border-collapse border border-gray-400 my-10 " >
          <tr>
            <th className="border border-gray-300">S.no</th>
            <th className="align-middle">Id</th>
            <th className="border border-gray-300">UserId</th>
            <th className="border border-gray-300">Title</th>
            <th className="border border-gray-300">Completed</th>
          </tr>
        
          {
          filtered.map((x) => (
            <tr>
              <td className="border border-gray-300">{x.id}</td>
              <td className="border border-gray-300">{x.id}</td>
              <td className="border border-gray-300">{x.userId}</td>
              <td className="border border-gray-300">{x.title}</td>
              <td className="border border-gray-300">{x.completed}</td>
            </tr>
          ))
          }
          
        </table>
      </article>

      <Pagination state={state} handleClick={handleClick} />
    </section>
  );
};

export default Fetch;
