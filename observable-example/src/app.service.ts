import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  getHello(): Observable<any> {
    const jockObservable = this.httpService.get('https://api.chucknorris.io/jokes/random');

    const jockObservable1 = jockObservable.pipe(
      map((resp) => {
        return resp.data;
      }),
    );

    jockObservable1.subscribe((jocks) => {
      console.log({jocks});
      
      console.log("Subscriber 2");
    });


    jockObservable1.subscribe((jocks) => {
      console.log({jocks});

      console.log("Subscriber 1");
    });


    return jockObservable1;
  }
}
