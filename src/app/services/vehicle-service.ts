import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private http = inject(HttpClient);

  loadAllPaged(page: number, pageSize: number = 6) {
    return this.http.get('/data/vehicles.json').pipe(
      map((data: any) => {
        const start = (page - 1) * pageSize;
        return data.slice(start, start + pageSize);
      })
    );
  }
}
