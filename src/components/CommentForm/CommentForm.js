import shortid from "shortid";

import s from "./CommentForm.module.css";

export default function CommentForm() {
  const idComments = shortid.generate();
  return (
    <form className={s.form}>
      <label htmlFor={idComments} className={s.leableName}>
        Write a comment
      </label>
      <textarea
        name="comment"
        id={idComments}
        cols="30"
        rows="10"
        className={s.input}
      ></textarea>

      <button type="submit" className={s.btn}>
        Comment
      </button>
    </form>
  );
}
