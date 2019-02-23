import apis from '../../../src/apis';

describe('makes.js', async () => {
  it('fetches all makes', async () => {
    const m = await apis.list('makes');

    // expect the current page is equal to be 1
    expect(m.current_page).toBe(1);
    
    // expect the type of the returned value to be Array
    expect(m.data.constructor).toBe(Array);

    // expect the numbe of the first page
    expect(m.data.length).toBe(100);
  });

  it('fetches all models of one make', async () => {
    const m = await apis.list('models', { make_id: 1 });

    expect(m.data.constructor).toBe(Array);
  });

  it('fetches all years of one model', async () => {
    const m = await apis.list('vehicles/years', { make_id: 1, model_id: 1 });

    // expect the number of years is equal to the total attribute
    expect(m.data.length).toEqual(m.total);
  })
});