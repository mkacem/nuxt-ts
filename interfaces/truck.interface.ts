import { VehicleInterface } from "./vehicle.interface";
/**
 * Interface for classes Truck
 *
 * @interface
 * @template T
 * @extends {VehiculeInterface<T>}
 */
export interface TruckInterface extends VehicleInterface {
  trailerWeight: number;
}
