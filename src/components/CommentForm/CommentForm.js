import { useState } from "react";
import shortid from "shortid";

import s from "./CommentForm.module.css";

export default function CommentForm({ id, onSubmit }) {
  const [commentValue, setCommentValue] = useState("");

  const ComentsValues = (e) => {
    const { value } = e.currentTarget;

    setCommentValue(value);
  };
  function addComment(e) {
    e.preventDefault();
    onSubmit({ id, commentValue });
  }

  const idComments = shortid.generate();

  return (
    <form className={s.form} onSubmit={addComment}>
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
