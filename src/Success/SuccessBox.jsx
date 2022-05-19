import React, { useRef } from "react";

const SuccessBox = ({ count, title, target }) => {
  const counterRef = useRef(null);

  // useEffect(function updateCounter() {
  //   const targetNumber = +counterRef.current.dataset.target;
  //   const initialNumber = +counterRef.current.innerText;
  //   const incPerCount = targetNumber / 200;
  //   if(initialNumber < targetNumber){
  //     counterRef.current.innerText = Math.ceil(initialNumber + incPerCount)
  //     setTimeout(updateCounter, 40)
  //   }
  // })

  return (
    <div className="success__box">
      <h5 ref={counterRef} className="success__box--count" data-target={target}>
        {count.toLocaleString()}
      </h5>
      <p className="success__box--title">{title}</p>
    </div>
  );
};
export default SuccessBox;
