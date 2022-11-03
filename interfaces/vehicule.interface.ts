/**
 * Interface for classes Vehicule
 *
 * @interface
 */
export interface VehiculeInterface {
  id: number;
  vehicleNumber: string;
  price: number;
  owner?:string;
  onSuccess?: (arg0:string) => string;
  onError?: (arg0:string) => string;
}