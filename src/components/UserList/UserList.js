import { useState } from "react";

import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

import s from "./UserList.module.css";

export default function UserList({ charactersList }) {
  const [comentsInfo, setComentsInfo] = useState([]);

  const addComment = (newComment) => {
    setComentsInfo([newComment, ...comentsInfo]);
  };

  const visibleComments = (userId) => {
    const filterComments = comentsInfo.filter(({ id }) => id === userId);
    return filterComments;
  };

  return (
    <>
      <ul className={s.userContainerList}>
        {charactersList &&
          charactersList.map(({ id, name, birth_year }) => (
            <li key={id} className={s.userList}>
              <div className={s.containerUserInfo}>
                <h1 className={s.userName}>Name: {name}</h1>
                <p className={s.userBirth_year}>Birth year: {birth_year}</p>
              </div>
              {comentsInfo && (
                <Comments userId={id} visibleComments={visibleComments} />
              )}
              <CommentForm id={id} onSubmit={addComment} />
            </li>
          ))}
      </ul>
    </>
  );
}
