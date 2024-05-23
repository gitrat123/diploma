import { makeAutoObservable } from "mobx";
import {jwtDecode} from "jwt-decode";
import { fetchUserChildren } from '../http/childAPI';


export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._isAdmin = false;
        this._user = {};
        this._userChildren = [];
        this.updateStoreFromToken();
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setIsAdmin(bool) {
        this._isAdmin = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setUserChildren(userChildren) {
        this._userChildren = userChildren;
    }
    
    get userChildren() {
        return this._userChildren;
    }

    get isAuth() {
        return this._isAuth;
    }

    get isAdmin() {
        return this._isAdmin;
    }

    get user() {
       return this._user;
    }

    updateStoreFromToken(token = localStorage.getItem('token')) {
        if (!token) {
            this.setIsAuth(false);
            this.setIsAdmin(false);
            this.setUser({});
            return;
        }

        try {
            const decoded = jwtDecode(token);
            this.setIsAuth(true);
            this.setIsAdmin(decoded.role === 'ADMIN');
            this.setUser({ id: decoded.id, email: decoded.email, role: decoded.role});
        } catch (error) {
            console.error(error);
            this.setIsAuth(false);
            this.setIsAdmin(false);
            this.setUser({});
        }
    }

    async fetchUserChildren() {
        if (this.isAuth) {
          const userId = this.user.id;
          try {
            const response = await fetchUserChildren(userId, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            });
            this.setUserChildren(response);
          } catch (error) {
            console.error(error);
          }
        }
      }
}