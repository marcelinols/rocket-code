//full name
export const add_name = (name) => ({
    type: 'add_name',
    payload: name
});

export const add_second_name = (secondName) => ({
    type: 'add_second_name',
    payload: secondName
});

export const add_first_name = (firstName) => ({
    type: 'add_first_name',
    payload: firstName
});

export const add_last_name = (lastName) => ({
    type: 'add_last_name',
    payload: lastName
});

//birthday
export const add_day = (day) => ({
    type: 'add_day',
    payload: day
});

export const add_month = (month) => ({
    type: 'add_month',
    payload: month
});

export const add_year = (year) => ({
    type: 'add_year',
    payload: year
});

//contact
export const add_email = (email) => ({
    type: 'add_email',
    payload: email
});
export const add_phone = (phone) => ({
    type: 'add_phone',
    payload: phone
});