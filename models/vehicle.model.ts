import { VehicleInterface } from "~/interfaces/vehicle.interface";
/** @implements {VehicleInterface} */
export abstract class Vehicle implements VehicleInterface {
  id: number;
  vehicleNumber: string;
  price: number;
  protected _owner:string;
  /**
   * @param {number} id - Vehicle identifier
   * @param {string} vehicleNumber - Vehicle number
   * @param {number} price - price of Vehicle
   * @param {string} owner - Vehicle owner name
   */
  constructor(id: number, vehicleNumber: string, price: number, owner?:string) {
    this.id = id;
    this.vehicleNumber = vehicleNumber;
    this.price = price;
    this._owner = owner||'';
  }
  /**
   * Vehicle owner name
   * @type {string}
   */
   public get owner():string {
    return this._owner;
  }
  /**
   * @param {string} name
   */
   public set owner(name:string){
    this._owner=name;
  }
  /**
   * Callback on success ws
   * @param {object|string} msg - reponse of ws
   * @return {string}.
   */
  public onSuccess(msg:object|string): string {
    return msg?.toString();
  }
  /**
   * Callback on error ws
   * @param {object|string} msg - reponse of ws
   * @return {string}.
   */
  public onError(msg:object|string): string {
    console.log('errors', msg);
    return msg?.toString();
  }

}
