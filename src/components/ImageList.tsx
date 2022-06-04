import styles from "./ImageList.module.scss";

const ImageList = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/01.JPG" />
      <img src="/assets/02.JPG" />
      <img src="/assets/03.JPG" />
      <img src="/assets/04.JPG" />
      <img src="/assets/05.JPG" />
      <img src="/assets/06.JPG" />
      <img src="/assets/07.JPG" />
    </div>
  );
};

export default ImageList;
