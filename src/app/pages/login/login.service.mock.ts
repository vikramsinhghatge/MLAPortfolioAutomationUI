import {Injectable} from "@angular/core";
import {MockBackend, MockConnection} from "@angular/http/testing";
import {ResponseOptions, Response} from "@angular/http";

import { User } from './user.model';
import { USER } from './user';

@Injectable()
export class MockLoginService {

  private loginUrl = 'api/login';  // URL to web api

  constructor(private backend: MockBackend) { }

    start(): void {
      this.backend.connections.subscribe((c: MockConnection) => {
          const URL = "api/login";

          if (c.request.url === URL && c.request.method === 1) {
            c.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(USER)
            })));
        }
      });
    }
}
