import { inject } from '@angular/core';
import { VehicleGroup } from './types/vehicle';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { lastValueFrom } from 'rxjs';
import { VehicleService } from './services/vehicle-service';

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
  withMethods((store, vehicleService = inject(VehicleService)) => ({
    async loadVehicles() {
      patchState(store, { isLoading: true });

      try {
        const vehicles = await lastValueFrom(vehicleService.loadAllPaged(1));
        patchState(store, { vehicles: vehicles.slice(0, 6), isLoading: false });
      } catch (error) {
        patchState(store, { isLoading: false, error: error as Error });
      }
    },
  })),
  withHooks({
    onInit(store) {
      store.loadVehicles();
    },
  })
);
