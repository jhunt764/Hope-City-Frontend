import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Auth } from "../models/auth.model";

import { environment } from "../../environments/environment";
import { Events } from "../models/events.model";
import { map, share } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class EventsService {
  constructor(private http: HttpClient) {}
  public auth: Observable<Auth>;
  private statusListener = new Subject<boolean>();
  events: Events[];

  getEvents(): Observable<Events[]> {
   return this.http
      .get<Events[]>(`${environment.apiUrlFull}/events/getall`)
    .pipe(
      map((data) => {
        data = data.map((reee) => {
          console.log("line27", );
          return reee;
        });
        console.log("line27", data);
        return data;
      })
    );
  }

  // ↓ we are not using this yet ↓
  editEvent(id: number): Observable<Events> {
    return this.http.get<Events>(`${environment.apiUrlFull}/events/` + id);
  }

  // ↓ this is not being used right now ↓
  getEventById(id: number) {
    return this.http.get<Events[]>(`${environment.apiUrlFull}/events/` + id);
    // .subscribe(events => {
    //   this.events = events;
    //     console.log(this.events)
    // })
  }

  // ↓ POST route in order to post an event to the database ↓
  createEvent(events: Events[]) {
    return this.http.post(`${environment.apiUrlFull}/events/create`, events);
    // .subscribe(events => {
    //   this.events = events;
    //   console.log("This is the createEvent function in my events.service", this.events)
    // })
  }

  // this ↓ is the route we need to make if a user clicks a button to attend an event.
  // goingToEvent(id:number) :Observable<Events[]> {
  //       return this.http.put<Events[]>(`${environment.apiUrlFull}/events/` + id)
  //     }
}