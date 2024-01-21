export interface IUserAddress {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age?: number;
  email: string;
  phone: string;
  image: string;
  address: IUserAddress;
  university: string;
}
