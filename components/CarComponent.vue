<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Cars ID</th>
        <th>Matricule Cars</th>
        <th>Price</th>
        <th>Number Of Seats</th>
        <th>Owner</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(car, idx) in cars"
        :key="idx"
      >
        <td>{{ car.id }}</td>
        <td>{{ car.vehicleNumber }}</td>
        <td>{{ car.price }}</td>
        <td>{{ car.numberOfSeats }}</td>
        <td>{{ car.owner }}</td>
        <td>
          <!-- <button class="btn btn-secondary btn-sm">Edit</button> -->
          <button
            class="btn btn-danger btn-sm"
            @click="useDeleteCar(car)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { CarInterface } from '~/interfaces/car.interface';
defineProps({
  cars: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(['removeItem']);
/**
 * emit remove car item
 * @return {void}
 */
const useDeleteCar = (car: CarInterface) => {
  emit('removeItem', car);
};
</script>

<style>
table{
  width: 100%;
}
</style>
