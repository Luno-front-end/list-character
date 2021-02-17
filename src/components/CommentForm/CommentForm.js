import { useState } from "react";
import shortid from "shortid";

import s from "./CommentForm.module.css";

export default function CommentForm({ id, onSubmit }) {
  const [commentValue, setCommentValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const ComentsValues = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setNameValue(value);
        break;
      case "comment":
        setCommentValue(value);
        break;
      default:
        break;
    }
  };
  function addComment(e) {
    e.preventDefault();
    onSubmit({ id, nameValue, commentValue });

    setCommentValue("");
    setNameValue("");
  }

  const idComments = shortid.generate();
  const idName = shortid.generate();

  return (
    <form className={s.form} onSubmit={addComment}>
      <label htmlFor={idName} className={s.leableName}>
        You name
      </label>
      <input
        type="text"
        name="name"
        id={idName}
        onChange={ComentsValues}
        value={nameValue}
      />
      <label htmlFor={idComments} className={s.leableName}>
        Write a comment
      </label>
      <textarea
        name="comment"
        id={idComments}
        cols="30"
        rows="10"
        value={commentValue}
        className={s.input}
        onChange={ComentsValues}
      ></textarea>

      <button type="submit" className={s.btn}>
        Comment
      </button>
    </form>
  );
}
