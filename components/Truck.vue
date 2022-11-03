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
			<tr v-for="(truck,idx) in trucks" :key="idx">
				<td>{{truck.id }}</td>
				<td>{{truck.vehicleNumber }}</td>
				<td>{{truck.price }}</td>
				<td>{{truck.trailerWeight }}</td>
				<td>{{truck.owner }}</td>
				<td>
					<!-- <button class="btn btn-secondary btn-sm">Edit</button> -->
					<button @click="useDeleteTruck(truck)" class="btn btn-danger btn-sm">Delete</button>
				</td>
			</tr>
		</tbody>
	</table>

</template>

<script lang="ts">
import { TruckInterface } from '~/interfaces/truck.interface';

export default {
	props: {
		trucks: {
			type: Array,
			default: () => [],
		}
	},
	setup(props:any,{emit}:any){
		/** 
     * emit remove truck item
     * @return {void}
     */ 
		const useDeleteTruck = (truck:TruckInterface) =>{
			emit('removeItem', truck);
		}
		return {
			useDeleteTruck
		}
	}
}
</script>