<script setup lang="ts">
import { useParkingStore } from '../stores/parking';

const store = useParkingStore()
</script>

<template>
  <div class="parking-list">
    <h2>Reserved Parking Places</h2>
    <div class="parking-place" v-for="parkingPlace in store.reservedParkingPlaces" :key="parkingPlace.id">
      <div class="parking-place-id">{{ parkingPlace.id }}</div>
      <button class="parking-place-button" @click="store.freeParkingPlace(parkingPlace.id)">Free place</button>
    </div>

    <br />

    <h2>Available Parking Places</h2>
    <div class="parking-place" v-for="parkingPlace in store.availableParkingPlaces" :key="parkingPlace.id">
      <div class="parking-place-id">{{ parkingPlace.id }}</div>
      <button class="parking-place-button" @click="store.reserveParkingPlace(parkingPlace.id)">Reserve place</button>
    </div>
  </div>
</template>

<style scoped>
.parking-list {
  display: flex;
  flex-direction: column;
}
.parking-place {
  display: flex;
  flex-direction: row;
  padding: 1rem;
}

.parking-place-id {
  padding: 0.5rem;
}
</style>
