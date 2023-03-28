import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const TodoListHandler = (e) => {
    setActivity(e.target.value);
  };
  function addActivity() {
    // setListData([...listData,activity])      //This code will work Asynchronously
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity]; //This code will work Synchronously
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updatedListData);
  };
  const RemoveAll = () => {
    setListData([]);
  };

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={TodoListHandler}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List :</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <ul>
                  <li key={i} className="listData">
                    {data}
                  </li>

                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>Remove</button>
                  </div>
                </ul>
              </>
            );
          })}
        {listData.length >= 2 && (
          <button onClick={RemoveAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
