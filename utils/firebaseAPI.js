const API_KEY = '';
const BASE_URL = 'https://iptv-list-dde83-default-rtdb.europe-west1.firebasedatabase.app';


export async function GetList() {
    const response = await fetch(`${BASE_URL}/iptvlist.json`);
    return await response.json();
}

export async function UpdateList(list) {
    return await fetch(`${BASE_URL}/iptvlist.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
    });
}