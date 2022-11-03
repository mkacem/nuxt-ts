import { VehiculeInterface } from "./vehicule.interface";
/**
 * Interface for classes Car
 *
 * @interface
 * @template T
 * @extends {VehiculeInterface<T>}
 */
export interface CarInterface extends VehiculeInterface {
  numberOfSeats: number;
}
