const initialState = {
    user: {
      name: 'kaixin',
      age: '25岁'
    }
};
export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
