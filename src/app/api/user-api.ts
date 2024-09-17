export const fetchUsers = async (): Promise<any> => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
