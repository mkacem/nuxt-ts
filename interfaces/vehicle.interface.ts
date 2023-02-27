/**
 * Interface for classes Vehicule
 *
 * @interface
 */
export interface VehicleInterface  {
  id: number;
  vehicleNumber: string;
  price: number;
  owner?:string;
  onSuccess?: (arg0:string) => string;
  onError?: (arg0:string) => string;
}