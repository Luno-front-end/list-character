import s from "./Coments.module.css";

export default function Comments({ userId, visibleComments }) {
  return (
    <>
      <div>
        {visibleComments(userId).map(({ commentValue }, index) => (
          <p key={index}>{commentValue}</p>
        ))}
      </div>
    </>
  );
}
