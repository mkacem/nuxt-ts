import { Vehicle } from "./vehicle.model";
import { useTruckStore as truckStore } from '~/services/truck.store';
import { TruckInterface } from "~/interfaces/truck.interface";

/**
 * @template T
 * @extends {Vehicle<T>}
 */
export class Truck extends Vehicle {
  private _trailerWeight: number;
  /**
   * @param {number} id - Vehicle identifier
   * @param {string} vehicleNumber - Vehicle number
   * @param {number} price - price of Vehicle
   * @param {number} trailerWeight - number of seats in Vehicle
   * @param {string} owner - Vehicle owner name
   */
  constructor(id: number, vehicleNumber: string, price: number,  trailerWeight: number, owner?:string) {
    super(id,vehicleNumber,price, owner);
    this._trailerWeight = trailerWeight;
  }
  /**
   * Trailer weight
   * @type {number}
   */
  public get trailerWeight(): number {
    return this._trailerWeight;
  }
  // * Setters
  public set trailerWeight (trailerWeight: number) {
    this._trailerWeight = trailerWeight;
  }
  /**
   * List of trucks from store
   * @type {Array}
   */
  public get truckList(): TruckInterface[]{
    return truckStore().trucks;
  }  
  /**
   * Add truck to database
   * @return {void}.
   */
  public addTruck():void{
    const id:any = this.truckList.at(-1)!=undefined?this.truckList.at(-1)?.id:0
    const o:TruckInterface={
      id:id+1, 
      vehicleNumber:this.vehicleNumber, 
      price:this.price, 
      trailerWeight:this.trailerWeight,
      owner:this.owner
    }
    truckStore().useAddTruck({truck:o, onError:this.onError, onSuccess:this.onSuccess});
  }
  /**
   * Delete truck from database
   * @return {void}.
   */
  public deleteTruck():void{
    truckStore().useDeleteTruck({id:this.id, onError:this.onError, onSuccess:this.onSuccess});
  }
  /**
   * Get truck list from database
   * @return {void}.
   */
  public getTrucks():void{
    truckStore().useGetTrucks();
  }
}
