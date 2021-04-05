export interface IDealer {
  id: string;
  name: string;
  amountOfCars?: number;
  country: string;
  foundedIn: number;
  newRecord?: boolean;
  headquarters: string;
  registrationDate?: Date | string;
}

export const initDealer = (): IDealer => ({
  id: null,
  name: null,
  amountOfCars: 0,
  country: null,
  foundedIn: null,
  newRecord: true,
  headquarters: null,
  registrationDate: null,
});
