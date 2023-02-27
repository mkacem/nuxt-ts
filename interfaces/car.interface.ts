import { VehicleInterface } from "./vehicle.interface";
/**
 * Interface for classes Car
 *
 * @interface
 * @template T
 * @extends {VehiculeInterface<T>}
 */
export interface CarInterface extends VehicleInterface {
  numberOfSeats: number;
}
