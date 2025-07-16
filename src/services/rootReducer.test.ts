import rootReducer, { initialState } from './rootReducer';

describe('rootReducer', () => {
  it('возвращает начальное состояние для неизвестного экшена', () => {
    const action = { type: 'UNKNOWN_ACTION' } as any;
    expect(rootReducer(undefined, action)).toEqual(initialState);
  });
});
