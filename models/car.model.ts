import { Vehicle } from "./vehicle.model";
import { useCarStore as carStore } from '~/services/car.store';
import { CarInterface } from "~/interfaces/car.interface";
/**
 * @template T
 * @extends {Vehicle<T>}
 */
export class Car extends Vehicle {
  private _numberOfSeats: number;
  /**
   * @param {number} id - Vehicle identifier
   * @param {string} vehicleNumber - Vehicle number
   * @param {number} price - price of Vehicle
   * @param {number} numberOfSeats - number of seats in Vehicle
   * @param {string} owner - Vehicle owner name
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
   * @param {number} seats
   */
  public set numberOfSeats (seats: number) {
    this._numberOfSeats = seats;
  }
  /**
   * List of cars from store
   * @type {Array}
   */
  public get carList(): CarInterface[]{
    return carStore().cars;
  }    
  /**
   * Add car to database
   * @return {void}.
   */
  public addCar():void{
    const id:any = this.carList.at(-1)!=undefined?this.carList.at(-1)?.id:0
    const o:CarInterface={
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
