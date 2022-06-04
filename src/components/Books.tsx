import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import styles from "./Books.module.scss";
const Books = () => {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    const db = getDatabase();
    const booksData = ref(db);
    onValue(booksData, (snapshot) => {
      const data = snapshot.val();
      setBooks(data);
    });
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {books &&
        Object.entries(books)?.map((item: Array<any>, idx: number) => {
          return (
            <article className={styles.container} key={idx + 1}>
              <section className={styles.container__body}>
                <h1>from. {item[0]}</h1>
                <h3>{item[1]?.content}</h3>
              </section>
            </article>
          );
        })}
    </>
  );
};

export default Books;
