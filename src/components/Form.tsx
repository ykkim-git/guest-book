import styles from "./Form.module.scss";
import React, { useState, useEffect } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setName(evt.target.value);

  const handleContentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(evt.target.value);

  const handleSubmit = () => {
    console.log(name, content);
  };
  return (
    <article className={styles.container}>
      <section className={styles.form}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={handleNameChange}
        />
        <textarea
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={handleContentChange}
        />
        <button className={styles.button} role="button" onClick={handleSubmit}>
          등록하기
        </button>
      </section>
      <div className={styles.liner}></div>
    </article>
  );
};

export default Form;
