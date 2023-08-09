import React from "react";

const NotesList = ({ data, setState, setData1, setData2 }) => {
  function Delete(value) {
    // console.log(setState);
    // console.log(data);
    const remove = data.filter((element) => element.title !== value.title);
    setState(remove);
  }

  function Edit(value, index) {
    // console.log(setData1['title'])
    console.log(value, index);
    setData1(value["title"]);
    setData2(value["value"]);
    const rem = data.filter((element) => element.title !== value.title);
    setState(rem);
  }

  return (
    <div>
      {data.map((value, index) => {
        console.log(value);

        return (
          <div className="box-div">
            <h2 className="Title-2"> {value.title.toUpperCase()}</h2>
            <p>{value.value} </p>
            <button onClick={() => Edit(value, index)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => Delete(value)} className="dlt-btn">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
