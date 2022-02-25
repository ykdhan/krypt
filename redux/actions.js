export const setDetail = state => dispatch => {
    console.log('DETAIL')
    dispatch({
        type: 'SET_DETAIL',
        payload: state
    })
}