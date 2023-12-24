import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
const Github = () => {
  //   const data = useLoaderData();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/Abhishek-1A")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div
      className="text-center m-4 bg-gray-600 text-white
    p-4 text-3xl"
    >
      Github followes:
      <img src="{data.avatar_url}" alt="Git picture" width={400} />
    </div>
  );
};

export default Github;
// export const githubInfoLoader = async () => {
//   const response = await fetch("https://github.com/Abhishek-1A");
//   return response.json();
// };
