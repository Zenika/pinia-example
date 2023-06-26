<script setup lang="ts">
import { useParkingStore } from '../stores/parking'

const store = useParkingStore()
</script>

<template>
  <div>
    <h1 class="parking-list-title">Pinia parking example</h1>
    <div class="parking-list-main-container">
      <div>
        <h1 class="parking-list-title">Reserved places</h1>
        <h2>{{ store.reservedParkingPlaces.length }} reserved parking places:</h2>
        <div
          class="parking-list-button-container"
          v-for="parkingPlace in store.reservedParkingPlaces"
          :key="parkingPlace.id"
        >
          <button class="parking-list-button" @click="store.freeParkingPlace(parkingPlace.id)">
            Free place n° {{ parkingPlace.id }}
          </button>
        </div>
      </div>

      <div>
        <h1 class="parking-list-title">Available places</h1>
        <h2>{{ store.availableParkingPlaces.length }} available parking places:</h2>
        <div
          class="parking-list-button-container"
          v-for="parkingPlace in store.availableParkingPlaces"
          :key="parkingPlace.id"
        >
          <button class="parking-list-button" @click="store.reserveParkingPlace(parkingPlace.id)">
            Reserve place n° {{ parkingPlace.id }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parking-list-title {
  text-align: center;
}
.parking-list-main-container {
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
}

.parking-list-button {
  margin-top: 16px;
  width: 200px;
  height: 40px;
}

.parking-list-button-container {
  text-align: center;
}
</style>
