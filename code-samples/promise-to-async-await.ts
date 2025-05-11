// setCookie, renderTable, enqueueSnackbar are synchronous

// Promise-based code
function partyHard() {
  return loginUser({ email: 'john@doe.com', password: 'Qwerty123!' })
    .then((token) => setCookie('accessToken', token), (error)=>{})
    .then(() => getUserProfile())
    .then((user) => loadUserOrders(user.id))
    .then((orders) => renderTable(orders))
    .catch((error) => enqueueSnackbar(error.message));
}


// Async/await-based code

const partyHard = async () => {
  try {
    const token = await loginUser({ email: 'john@doe.com', password: 'Qwerty123!' });
    setCookie('accessToken', token);
    const user = await getUserProfile();
    const orders = await loadUserOrders(user.id);
    renderTable(orders)
  } catch(error) {
    enqueueSnackbar(error.message)
   }
}
