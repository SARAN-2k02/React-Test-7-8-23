import React from "react";

const NotesList = ({ data, setState }) => {
  function Delete(value) {
    // console.log(setState);
    // console.log(data);g
    // alert("hey");
    const remove = data.filter((element) => element.title !== value.title);
    setState(remove);
  }

  return (
    <div>
      {data.map((value) => {
        console.log(value);

        return (
          <div className="box-div">
            <h1 className="Title-2"> {value.title.toUpperCase()}</h1>
            <p>{value.value} </p>
            <button> Edit </button>
            <button onClick={() => Delete(value)}> Delete </button>
          </div>
        );
      })}
    </div>
  );
};

export default NotesList;
