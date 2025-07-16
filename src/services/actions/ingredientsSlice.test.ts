import ingredientsReducer, { fetchIngredients } from './ingredientsSlice';

describe('ingredientsSlice', () => {
  it('при pending isLoading=true', () => {
    const action = { type: fetchIngredients.pending.type };
    expect(ingredientsReducer(undefined, action).isLoading).toBe(true);
  });

  it('при fulfilled сохраняет данные и сбрасывает isLoading', () => {
    const mock = [{ _id: '1' }];
    const action = { type: fetchIngredients.fulfilled.type, payload: mock };
    const state = ingredientsReducer({ data: [], isLoading: true, error: null }, action);
    expect(state.data).toEqual(mock);
    expect(state.isLoading).toBe(false);
  });

  it('при rejected сохраняет ошибку и сбрасывает isLoading', () => {
    const action = { type: fetchIngredients.rejected.type, error: { message: 'err' } };
    const state = ingredientsReducer({ data: [], isLoading: true, error: null }, action);
    expect(state.error).toBe('err');
    expect(state.isLoading).toBe(false);
  });
});
