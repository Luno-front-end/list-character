import s from "./Coments.module.css";

export default function Comments({ userId, visibleComments }) {
  return (
    visibleComments && (
      <div className={s.containerVisibleComments}>
        <h2 className={s.headerComents}>Comments</h2>
        {visibleComments(userId).map(({ nameValue, commentValue }, index) => (
          <div key={index} className={s.containerInfo}>
            <h3>Name: {nameValue}</h3>
            <p className={s.text}>
              <span className={s.headerText}>Comment: </span>
              {commentValue}
            </p>
          </div>
        ))}
      </div>
    )
  );
}
