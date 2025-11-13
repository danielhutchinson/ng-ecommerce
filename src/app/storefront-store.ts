import { inject } from '@angular/core';
import { VehicleGroup } from './types/vehicle';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export type StorefrontState = {
  vehicles: VehicleGroup[];
  isLoading: boolean;
  error: Error | null;
};

export const initialState: StorefrontState = {
  vehicles: [],
  isLoading: false,
  error: null,
};

export const StorefrontStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, http = inject(HttpClient)) => ({
    async loadVehicles() {
      const vehicles = await lastValueFrom(http.get<VehicleGroup[]>('/data/vehicles.json'));
      patchState(store, { vehicles, isLoading: false, error: null });
    },
  })),
  withHooks({
    onInit(store) {
      store.loadVehicles();
    },
  })
);
