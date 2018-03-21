
export function injectSagas(store, sagas) {
  if (!sagas) {
    return;
  }
  const newEffects = sagas.filter(saga => !store.injectedSagas[saga.name]);
  newEffects.forEach(saga => {
    const sagaTask = store.runSaga(saga);
    store.injectedSagas[saga.name] = { saga, sagaTask };
  })
}