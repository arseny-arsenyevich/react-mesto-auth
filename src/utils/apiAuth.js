class ApiAuth {
    constructor ({ baseUrl, headers }) {
        this._url = baseUrl
        this._headers = headers
    }  

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`${res.status}`)
    }

    signUp({ password, email }) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: `${password}`,
                email: `${email}`
            })
        }).then(this._checkResponse)
    }

    signIn({ password, email }) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: `${password}`,
                email: `${email}`
            })
        }).then(this._checkResponse)
    }
        
    checkToken() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                ...this._headers,
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(this._checkResponse)
    }
}

const apiAuth = new ApiAuth({
    baseUrl: 'https://auth.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default apiAuth