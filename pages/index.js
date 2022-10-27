import styles from "../styles/Home.module.css";
import React, { useState, useCallback, useMemo } from "react";
import Test from "../components/Test";
import Head from "next/head";

function Home() {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(5);

  const add1 = useCallback(() => {
    setcount((pre) => pre + 1);
  }, []);

  const add2 = useCallback(() => {
    setcount1((pre) => pre + 5);
  }, []);

  const odd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count % 2 === 0;
  }, [count]);

  return (
    <div className="container">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Test />
      <div className="d-flex">
        <span>{odd ? "odd" : "even"}</span>
        <h1 className="text-center">this is main page </h1>
        <h2>
          count 1 : {count} |||| count2 : {count1}
        </h2>
        <button className="btn btn-info" onClick={add1}>
          add{" "}
        </button>
        <button className="btn btn-info" onClick={add2}>
          add 1
        </button>
      </div>
    </div>
  );
}
export default Home;
