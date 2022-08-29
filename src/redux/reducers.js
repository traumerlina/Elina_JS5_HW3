const initialState = {
    books: [
        {
            title: "HARRY",
            author: "Elina",
            id: 1,
            price: 32,
        },
        {
            title: "HARRY",
            author: "Elina",
            id: 2,
            price: 56,
        },
        {
            title: "HARRY",
            author: "Elina",
            id: 3,
            price: 12,
        }
    ],
    loading: true,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                loading: false,
                error: false,
            }
        default: 
        return state;
    }
}

export default reducer;