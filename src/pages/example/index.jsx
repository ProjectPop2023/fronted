import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function exampleLoader() {
  const API = "https://jsonplaceholder.typicode.com/posts?userId=1";

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  } catch {
    throw new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}

const Example = () => {
    const fetchData = useLoaderData()
    console.log(fetchData);
  return (
    <React.Fragment>
      <div>Ini contoh sebuah page</div>
    </React.Fragment>
  );
};

export default Example;
