export const createUser = (userDetails) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = {
                ...userDetails,
            };
            resolve(response);
        }, 2000);
    });
};