import apiAuth from "../utils/apiAuth";

class LoginService {
    constructor() {
        this.callbacks = [];
    }

    signIn({ email, password }) {
        return apiAuth.signIn({ email, password })
            .then(res => {
                localStorage.setItem('token', res.token);
                return res
            })
    }

    signUp({ email, password }) {
        return apiAuth.signUp({ email, password })
    }

    checkToken() {
        return apiAuth.checkToken()
            .then(res => {
                this.emit(res);
                return res
            })
    }

    emit(data) {
        this.callbacks.forEach(cb => cb(data))
    }

    on(cb) {
        this.callbacks.push(cb);
    }
}

export const loginService = new LoginService();