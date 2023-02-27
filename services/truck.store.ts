import { defineStore } from 'pinia';
import { TruckInterface } from '~/interfaces/truck.interface';

export const useTruckStore = defineStore('useTruckStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      truck: <TruckInterface>{},
      trucks: <TruckInterface[]>[],
    };
  },
  actions: {
    /** add new truck
     * @param {Object} $data - The shape is the same as SpecialType above
     * @param {Object} $data.truck - truck object
     * @param {Function} $data.onSuccess - callback success 
     * @param {onError} $data.onError - callback error
     * @returns {onError|onSuccess} callback to run
     */
    async useAddTruck($data:{truck:TruckInterface, onSuccess:Function, onError:Function} ) {      
      try {
        const response: any = await fetch(`${useNuxtApp().$config.API}/users/1`, {
          method: 'GET',
        });
        const res = await response.json();
        if (response.status == 200) {
          this.trucks.push($data.truck);
          return $data.onSuccess(res);
        } else {
          return $data.onError(res);
        }
      } catch (e) {
        return $data.onError(e);
      }
    },
    /** Get Track list
     * @returns {void}
     */
    async useGetTrucks() {
      try {
        const response: any = await fetch(`${useNuxtApp().$config.API}/users`, {
            method: 'GET'
          }
        );
        const json = await response.json();
        const res:Array<TruckInterface> = json.users.filter((a:any, index:number)=>index<20 && index>9)
        /** mock data */
        res.forEach((element:any) => {
          element.vehicleNumber = element.phone;
          element.owner = `${element.firstName} ${element.lastName}`;
          element.trailerWeight = element.age;
          element.price = element.height;
        });
        this.trucks = res;
      } catch (e) {
        //
      }
    },
    /** remove track 
     * @param {Object} $data - The shape is the same as SpecialType above
     * @param {number} $data.id - track id
     * @param {Function} $data.onSuccess - callback success 
     * @param {onError} $data.onError - callback error
     * @returns {onError|onSuccess} callback to run
     */
    async useDeleteTruck($data: { id:number, onError:Function, onSuccess:Function }) {
      try {
        const response: any = await fetch(`${useNuxtApp().$config.API}/users/1`, {
            method: 'GET'
          }
        );
        if (response.status == 200) {
          this.trucks=this.trucks.filter((a:any)=>a.id!=$data.id);
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
