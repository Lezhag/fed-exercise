export const postComment = (url, data) => {
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
    })
        .then(response => response.json())
};

export const getComments = (url) => {
    return fetch(url, {
        cache: 'no-cache',
        headers: {
            'content-type': 'application/json'
        },
        method: 'GET',
    })
        .then(response => response.json())
};