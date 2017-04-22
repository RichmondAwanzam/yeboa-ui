import * as types from '../constants/ActionTypes';



export function changeWidthAndHeight(height, width) {
  return {
    type: types.CHANGE_WIDTH_AND_HEIGHT,
    height,
    width,
  };
}

export function initEnvironment() {
  return dispatch => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);

    dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));

    window.onresize = () => {
      dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));
    };
  };
}
