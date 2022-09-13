import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "./actions";
const A = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: Actions.action,
    });
  }, []);

  // const clickButton = () => {
  //   dispatch({
  //     type: Actions.TEST_TAKE_LEADING,
  //   });
  // };

  const clickButton2 = () => {
    console.log("test");
    dispatch({
      type: Actions.TEST_TAKE_LATEST,
    });
  };
  const clickButton3 = () => {
    dispatch({
      type: Actions.TEST_TAKE_EVERY,
    });
  };

  const clickButton4 = () => {
    dispatch({
      type: Actions.TEST_YIELD_SPAWN_FORK,
    });
  };
  return (
    <>
      <div>Day la A</div>
      {/* <button onClick={clickButton}>Bam</button> */}
      <button onClick={clickButton2}>Bam2</button>
      <button onClick={clickButton3}>Bam3</button>
      <button onClick={clickButton4}>Bam4</button>
    </>
  );
};

export default A;
