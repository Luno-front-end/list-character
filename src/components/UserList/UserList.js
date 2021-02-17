import shortid from "shortid";

import CommentForm from "../CommentForm/CommentForm";
import s from "./UserList.module.css";

export default function UserList({ charactersList }) {
  // console.log(charactersList)
  return (
    <>
      <ul className={s.userContainerList}>
        {charactersList &&
          charactersList.map(({ name, birth_year }) => (
            <li key={shortid.generate()} className={s.userList}>
              <div className={s.containerUserInfo}>
                <h1 className={s.userName}>Name: {name}</h1>
                <p className={s.userBirth_year}>Birth year: {birth_year}</p>
              </div>
              <CommentForm />
            </li>
          ))}
      </ul>
    </>
  );
}
