<template>
  <main>  
    <fieldset>
      <legend>List of cars</legend>
      <input
        v-model="newCar.vehicleNumber"
        type="text"
        placeholder="car matricule"
      >
      <input
        v-model="newCar.price"
        type="text"
        placeholder="price car"
      >
      <input
        v-model="newCar.numberOfSeats"
        type="text"
        placeholder="numberOfSeats"
      >
      <input
        v-model="newCar.owner"
        type="text"
        placeholder="owner"
      >
      <button @click="useAddCar">
        Add Car
      </button>
    </fieldset>
    <car-component
      :cars="cars"
      @remove-item="useRemoveCar"
    />
    <hr>
    <fieldset>
      <legend>List of trucks</legend>
      <input
        v-model="newTruck.vehicleNumber"
        type="text"
        placeholder="truck"
      >
      <input
        v-model="newTruck.price"
        type="text"
        placeholder="price truck"
      >
      <input
        v-model="newTruck.trailerWeight"
        type="text"
        placeholder="trailer weight"
      >
      <input
        v-model="newTruck.owner"
        type="text"
        placeholder="owner"
      >

      <button @click="useAddTruck">
        Add Truck
      </button>
    </fieldset>
    <truck-component
      :trucks="trucks"
      @remove-item="useRemoveTruck"
    />
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { CarInterface } from '~/interfaces/car.interface';
import { TruckInterface } from '~/interfaces/truck.interface';
import { Car } from '~/models/car.model';
import { Truck } from '~/models/truck.model';

/** instance of class */
const car = new Car(0, '', 0, 0);
const truck = new Truck(0, '', 0, 0);
/** set reactive variables */
const newCar = ref({
  id: -1,
  vehicleNumber: '',
  price: '',
  numberOfSeats: '',
  owner: '',
});
const newTruck = ref({
  id: -1,
  vehicleNumber: '',
  price: '',
  trailerWeight: '',
  owner: '',
});
/** initiate car & truck list */
onMounted(() => {
  /** get cars & trucks from DB  */
  car.getCars();
  truck.getTrucks();
});
/** populates car table */
const cars = computed(() => {
  return car.carList;
});
/** populates trucks table */
const trucks = computed(() => {
  return truck.truckList;
});
/**
 * Callback emit removeItem
 * @param {Object} args
 * @return {void}
 */
const useRemoveCar = (args: CarInterface) => {
  car.id = args.id;
  car.deleteCar();
  car.id = -1;
};
/**
 * Callback emit removeItem
 * @param {Object} args
 * @return {void}
 */
const useRemoveTruck = (args: TruckInterface) => {
  truck.id = args.id;
  truck.deleteTruck();
  truck.id = -1;
};
/**
 * populate car table
 * @return {void}
 */
const useAddCar = (): void => {
  car.id = newCar.value.id;
  car.vehicleNumber = newCar.value.vehicleNumber;
  car.price = parseFloat(newCar.value.price);
  car.numberOfSeats = parseInt(newCar.value.numberOfSeats);
  car.owner = newCar.value.owner;
  car.addCar();
  newCar.value = {
    id: -1,
    vehicleNumber: '',
    price: '',
    numberOfSeats: '',
    owner: '',
  };
};
/**
 * populate truck table
 * @return {void}
 */
const useAddTruck = (): void => {
  truck.id = newTruck.value.id;
  truck.vehicleNumber = newTruck.value.vehicleNumber;
  truck.price = parseFloat(newTruck.value.price);
  truck.trailerWeight = parseInt(newTruck.value.trailerWeight);
  truck.owner = newTruck.value.owner;
  truck.addTruck();
  newTruck.value = {
    id: -1,
    vehicleNumber: '',
    price: '',
    trailerWeight: '',
    owner: '',
  };
};
</script>
<style>
main{
  max-width: 1024px;
  margin: auto;
}
</style>
