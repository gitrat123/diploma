import {makeAutoObservable} from "mobx";

export default class GroupStore {
    constructor() {
        this._types = []
        this._addresses = []
        this._groups = []
        this._baskets = []
        this._selectedType = {}
        this._selectedAddress = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setAddresses(addresses){
        this._addresses = addresses
    }

    setSelectedAddress(address){
        this._selectedAddress = address
    }

    setGroups(groups){
        this._groups = groups
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setBaskets(basket){
        this._baskets = basket
    }

    get types(){
        return this._types
    }

    get addresses(){
        return this._addresses
    }

    get groups(){
        return this._groups
    }

    get selectedType(){
        this.setPage(1)
        return this._selectedType
    }

    get selectedAddress(){
        this.setPage(1)
        return this._selectedAddress
    }

    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

    get totalCount() {
        return this._totalCount
    }

    get baskets() {
        return this._baskets
    }
}