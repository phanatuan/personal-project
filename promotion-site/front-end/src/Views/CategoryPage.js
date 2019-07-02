import React from "react";

const CategoryPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>This is a Page for Category: {props.match.params.category}</h1>
      <p>List of Promotion</p>
      <ul>
        <li>1st</li>
        <li>2nd</li>
        <li>3rd</li>
      </ul>
      <p>Filter Suite (render based on the list)</p>
    </div>
  );
};

export default CategoryPage;
