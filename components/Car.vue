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
			<tr v-for="(car,idx) in cars" :key="idx">
				<td>{{car.id }}</td>
				<td>{{car.vehicleNumber }}</td>
				<td>{{car.price }}</td>
				<td>{{car.numberOfSeats }}</td>
				<td>{{car.owner }}</td>
				<td>
					<!-- <button class="btn btn-secondary btn-sm">Edit</button> -->
					<button @click="useDeleteCar(car)" class="btn btn-danger btn-sm">Delete</button>
				</td>
			</tr>
		</tbody>
	</table>

</template>

<script lang="ts">
import { CarInterface } from '~/interfaces/car.interface';

export default {
	props: {
		cars: {
			type: Array,
			default: () => [],
		}
	},
	setup(props:any,{emit}:any){
		/** 
     * emit remove car item
     * @return {void}
     */ 
		const useDeleteCar = (car:CarInterface) =>{
			emit('removeItem', car);
		}
		return {
			useDeleteCar
		}
	}
}
</script>