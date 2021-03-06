import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.root}>
      <p className="u-underlineText">グローバルなクラスの指定</p>
      <p className={styles.root_text}>ローカルなクラスの指定</p>
      <p className={`u-underlineText ${styles.root_text}`}>
        グローバルとローカル両方の指定
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
