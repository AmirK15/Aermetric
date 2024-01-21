import { makeAutoObservable } from 'mobx';
import { IUser } from '../models/users';

interface IUsersData {
  users?: IUser[];
  total: number;
  skip: number;
  limit: number;
}

interface IAppStore {
  data: IUsersData;
  isLoading: boolean;
  searchQuery: string;
  searchLimit: number;
  totalPages: number;
  userInfo: IUser | null;
}

class AppStore implements IAppStore {
  data = {
    users: [],
    total: 0,
    skip: 0,
    limit: 10,
  };
  isLoading = false;
  searchQuery = '';
  searchLimit = 10;
  totalPages = 10;
  currentPage = 1;
  skipPages = 0;
  userInfo = {
    firstName: '',
    lastName: '',
    maidenName: '',
    email: '',
    phone: '',
    image: '',
    address: {
      address: '',
      city: '',
      postalCode: '',
      state: '',
    },
    university: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  setLimit(newLimit: number) {
    this.searchLimit = newLimit;
    this.currentPage = 1;
    this.skipPages = 0;
    this.calculateTotalPages();
    this.getUsers();
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
    this.currentPage = 1;
    this.skipPages = 0;
    this.getUsers();
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
    this.skipPages = (page - 1) * this.searchLimit;
    this.getUsers();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.data.total / this.searchLimit);
  }

  async getUsers() {
    const searchParam = this.searchQuery ? `/search?q=${this.searchQuery}&` : '?';
    try {
      this.isLoading = true;
      const res = await fetch(
        `https://dummyjson.com/users${searchParam}limit=${this.searchLimit}&skip=${this.skipPages}`,
      );
      const data = await res.json();
      this.data.users = data.users;
      this.data.total = data.total;
      this.calculateTotalPages();
    } catch (e) {
      alert(e);
    } finally {
      this.isLoading = false;
    }
  }

  async getUser(id: string) {
    try {
      this.isLoading = true;
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await res.json();
      this.userInfo = data;
    } catch (e) {
      alert(e);
    } finally {
      this.isLoading = false;
    }
  }
}

const store = new AppStore();
export default store;
