<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Truck ID</th>
        <th>Matricule Cars</th>
        <th>Price</th>
        <th>Carry Weight</th>
        <th>Owner</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(truck, idx) in trucks"
        :key="idx"
      >
        <td>{{ truck.id }}</td>
        <td>{{ truck.vehicleNumber }}</td>
        <td>{{ truck.price }}</td>
        <td>{{ truck.trailerWeight }}</td>
        <td>{{ truck.owner }}</td>
        <td>
          <!-- <button class="btn btn-secondary btn-sm">Edit</button> -->
          <button
            class="btn btn-danger btn-sm"
            @click="useDeleteTruck(truck)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { TruckInterface } from '~/interfaces/truck.interface';

defineProps({
  trucks: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(['removeItem']);
/**
 * emit remove truck item
 * @return {void}
 */
const useDeleteTruck = (truck: TruckInterface) => {
  emit('removeItem', truck);
};
</script>
