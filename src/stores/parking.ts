import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type {ParkingPlace} from '../types/parking-place'

export const useParkingStore = defineStore('parking', () => {
  const parking: Ref<ParkingPlace[]> = ref([{id:1, isAvailable: true},{id:2, isAvailable: true},{id:3, isAvailable: false}])

  const availableParkingPlaces = computed(() => parking.value.filter(place => place.isAvailable))
  const reservedParkingPlaces = computed(() => parking.value.filter(place => !place.isAvailable))

  function reserveParkingPlace(id: ParkingPlace['id']) {
    const indexOfParkingPlace = parking.value.findIndex((place) => place.id === id)
    if(indexOfParkingPlace >= 0) parking.value[indexOfParkingPlace].isAvailable = false
  }

  function freeParkingPlace(id: ParkingPlace['id']) {
    const indexOfParkingPlace = parking.value.findIndex((place) => place.id === id)
    if(indexOfParkingPlace >= 0) parking.value[indexOfParkingPlace].isAvailable = true
  }

  return { parking, availableParkingPlaces, reservedParkingPlaces, reserveParkingPlace, freeParkingPlace }
})
