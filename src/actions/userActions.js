export const addUser = (data) => {
    return {
        type: 'ADD_USER',
        payload: data
    }
}

export const toggleStatusUser = (id) => {
    return {
        type: 'TOGGLE_STATUS',
        payload: id
    }
}

export const removeUser = (id) => {
    return {
        type: 'REMOVE_USER',
        payload: id
    }
}

export const activateUsers = () => {
    return {
        type: 'ACTIVATE_ALL'
    }
}

export const deactivateUsers = () => {
    return {
        type: 'DEACTIVATE_ALL'
    }
}