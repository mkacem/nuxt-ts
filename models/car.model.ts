import { Vehicle } from "./vehicule.model";
import { useCarStore as carStore } from '@/store/car.store';
import { CarInterface } from "~/interfaces/car.interface";

/**
 * @template T
 * @extends {Vehicle<T>}
 */
export class Car extends Vehicle {
  private _numberOfSeats: number;
  /**
   * @param {number} id - vehicule identifier
   * @param {string} vehicleNumber - vehicule number
   * @param {number} price - price of vehicule
   * @param {number} numberOfSeats - number of seats in vehicule
   * @param {string} owner - vehicule owner name
   */
  constructor(id: number, vehicleNumber: string, price: number,  numberOfSeats: number, owner?:string) {
    super(id,vehicleNumber,price, owner);
    this._numberOfSeats = numberOfSeats;
  }
  /**
   * Number of verhicule seats
   * @type {number}
   */
  public get numberOfSeats(): number {
    return this._numberOfSeats;
  }
  /**
   * List of cars from store
   * @type {Array}
   */
  public get carList(): CarInterface[]{
    return carStore().cars;
  }  
  /**
   * @param {number} seats
   */
  public set numberOfSeats (seats: number) {
    this._numberOfSeats = seats;
  }
  /**
   * Add car to database
   * @return {void}.
   */
  public addCar():void{
    let id:any = this.carList.at(-1)!=undefined?this.carList.at(-1)?.id:0
    let o:CarInterface={
      id:id+1, 
      vehicleNumber:this.vehicleNumber, 
      price:this.price, 
      numberOfSeats:this.numberOfSeats,
      owner:this.owner
    }
    carStore().useAddCar({car:o, onError:this.onError, onSuccess:this.onSuccess});
  }
  /**
   * Delete car from database
   * @return {void}.
   */
  public deleteCar():void{
    carStore().useDeleteCar({id:this.id, onError:this.onError, onSuccess:this.onSuccess});
  }
  /**
   * Get car list from database
   * @return {void}.
   */
  public getCars():void{
    carStore().useGetCars();
  }
}
