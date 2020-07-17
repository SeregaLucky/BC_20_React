import React from 'react';
import { connect } from 'react-redux';
import authTypes from '../../redux/auth/authTypes';
import authActions from '../../redux/auth/authActions';

const HomePage = ({ isShowText, makeToggle, showTextNow, hideTextNow }) => {
  const toggle = () => makeToggle();

  const showText = () => showTextNow();

  const hideText = () => hideTextNow();

  return (
    <>
      <h2>HomePage</h2>

      <button type="button" onClick={toggle}>
        Flag
      </button>

      <button type="button" onClick={showText}>
        Show Text
      </button>

      <button type="button" onClick={hideText}>
        Hide Text
      </button>

      {isShowText && <p>TEXT</p>}
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isShowText: state.authRoot.isShowText,
  };
};

const mapDisptchToProps = dispatch => {
  return {
    makeToggle: () => dispatch(authActions.isShowText()),
    showTextNow: () => dispatch(authActions.showText()),
    hideTextNow: () => dispatch(authActions.hideText()),
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(HomePage);

//
//
//
//

// const mapDisptchToProps = dispatch => {
//   return {
//     makeToggle: () => dispatch({ type: authTypes.IS_SHOW_TEXT }),
//     showTextNow: () =>
//       dispatch({
//         type: authTypes.SHOW_TEXT,
//         payload: true,
//       }),
//     hideTextNow: () =>
//       dispatch({
//         type: authTypes.HIDE_TEXT,
//         payload: false,
//       }),
//   };
// };

//
//
//
//

// function connect(cb1, cb2) {
//   // const state =
//   // const dispatch =
//   cb1(state);
//   cb2(dispatch);
// }
