import { VehiculeInterface } from "./vehicule.interface";
/**
 * Interface for classes Truck
 *
 * @interface
 * @template T
 * @extends {VehiculeInterface<T>}
 */
export interface TruckInterface extends VehiculeInterface {
  trailerWeight: number;
}
