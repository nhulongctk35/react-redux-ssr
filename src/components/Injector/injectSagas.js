
export function injectSagas(store, sagas) {
  if (!sagas) {
    return;
  }
  const newEffects = sagas.filter(injectedSaga => !store.injectedSagas[injectedSaga.name]);
  newEffects.forEach(saga => {
    const sagaTask = store.runSaga(saga);
    store.injectedSagas[saga.name] = { saga, sagaTask };
  })
}