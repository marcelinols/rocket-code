// reducers.js
const initialState = {
    name: "",
    secondName: "",
    firstName: "",
    lastName: "",
    day: 0,
    month: "Enero",
    year: 0,
    email: "",
    phone: "",
    contac: false,
    birthday: false,
    send: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_name':
            return { ...state, name: action.payload };
        case 'add_second_name':
            return { ...state, secondName: action.payload };
        case 'add_first_name':
            return { ...state, firstName: action.payload };
        case 'add_last_name':
            return { ...state, lastName: action.payload };

        case 'add_day':
            return { ...state, day: action.payload };
        case 'add_month':
            return { ...state, month: action.payload };
        case 'add_year':
            return { ...state, year: action.payload };

        case 'add_email':
            return { ...state, email: action.payload };
        case 'add_phone':
            return { ...state, phone: action.payload };

        case 'act_birthday':
            return { ...state, birthday: true };
        case 'act_contact':
            return { ...state, contact: true };
        case 'act_send':
            return { ...state, send: true };
        default:
            return state;
    }
};

export default userReducer;
