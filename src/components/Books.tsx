import styles from "./Books.module.scss";
import { useState, useEffect } from "react";
const Books = () => {
  return (
    <article className={styles.container}>
      <section className={styles.books}>
        <input type="text" placeholder="이름" />
        <textarea placeholder="내용을 입력해주세요." />
        <button className={styles.button} role="button">
          등록하기
        </button>
      </section>
    </article>
  );
};

export default Books;
