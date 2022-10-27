import styles from "../styles/Home.module.css";
import React, { useState, useCallback, useMemo } from "react";
import Test from "../components/Test";

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
    <div className={styles.container}>
      <Test />
      <span>{odd ? "odd" : "even"}</span>
      <h1>this is main page </h1>
      <h2>
        count 1 : {count} |||| count2 : {count1}
      </h2>
      <button onClick={add1}>add </button>
      <button onClick={add2}>add 1</button>
    </div>
  );
}
export default Home;
