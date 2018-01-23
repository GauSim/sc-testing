import { TestBed, inject } from '@angular/core/testing';

import { EnsureItemGuard } from './ensure-item.guard';
import { StoreModule, Store } from '@ngrx/store';
import { LoadServiceCall } from '../../serviceCall/serviceCall.actions';

describe('ServiceCallExistsGuard', () => {
  let store: Store<{}>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureItemGuard],
      imports: [
        StoreModule.forRoot({})
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

  });


  it('should mount', inject([EnsureItemGuard], (guard: EnsureItemGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should dispatch an action to load data with id from state params', inject([EnsureItemGuard], (guard: EnsureItemGuard) => {
    const MOCKED_ID = 'MOCKED_ID';

    const routeMock = { params: { id: MOCKED_ID } };
    guard.canActivate(routeMock as any);

    const action = new LoadServiceCall(MOCKED_ID);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  }));

});
