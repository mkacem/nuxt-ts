import { defineStore } from 'pinia';
import { CarInterface } from '~/interfaces/car.interface';

export const useCarStore = defineStore('useCarStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      car: <CarInterface>{},
      cars: <CarInterface[]>[],
    };
  },
  actions: {
    /** add new car
     * @param {Object} $data - The shape is the same as SpecialType above
     * @param {Object} $data.car - car object
     * @param {Function} $data.onSuccess - callback success 
     * @param {onError} $data.onError - callback error
     * @returns {onError|onSuccess} callback to run
     */
    async useAddCar($data:{car:CarInterface, onSuccess:Function, onError:Function} ) {      
      try {
        const response: any = await fetch(`${this.$nuxt.$config.API}/users/1`, {
          method: 'GET',
        });
        const res = await response.json();
        if (response.status == 200) {
          this.cars.push($data.car);
          return $data.onSuccess(res);
        } else {
          return $data.onError(res);
        }
      } catch (e) {
        return $data.onError(e);
      }
    },
    /** Get car list
     * @returns {void}
     */
    async useGetCars() {
      try {
        const response: any = await fetch(`${this.$nuxt.$config.API}/users`, {
            method: 'GET'
          }
        );
        const res:Array<CarInterface> = await response.json();
        /** mock data */
        res.forEach((element:any) => {
          element.vehicleNumber = element.address.zipcode;
          element.owner = element.name;
          element.numberOfSeats = parseInt(element.phone.substring(0,3));
        });
        this.cars = res;
      } catch (e) {
        //
      }
    },
    /** remove car 
     * @param {Object} $data - The shape is the same as SpecialType above
     * @param {number} $data.id - car id
     * @param {Function} $data.onSuccess - callback success 
     * @param {onError} $data.onError - callback error
     * @returns {onError|onSuccess} callback to run
     */
    async useDeleteCar($data: { id:number, onError:Function, onSuccess:Function }) {
      try {
        const response: any = await fetch(`${this.$nuxt.$config.API}/users/1`, {
            method: 'GET'
          }
        );
        if (response.status == 200) {
          this.cars=this.cars.filter((a:any)=>a.id!=$data.id);
          return $data.onSuccess();
        } else {
          return $data.onError('error');
        }
      } catch (e) {
        return $data.onError(e);
      }
    }
  },
});
