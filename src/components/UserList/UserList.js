import { useState } from "react";
import shortid from "shortid";

import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

import s from "./UserList.module.css";

export default function UserList({ charactersList }) {
  // function commentsCharacters() {
  const [comentsInfo, setComentsInfo] = useState([]);
  // }

  const addComment = (newComment) => {
    setComentsInfo([newComment, ...comentsInfo]);
  };

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
              {comentsInfo && <Comments comentsInfoProps={comentsInfo} />}
              <CommentForm onSubmit={addComment} />
            </li>
          ))}
      </ul>
    </>
  );
}
