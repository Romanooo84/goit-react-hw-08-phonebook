export const LockalStorageData = (array) => {
    let getLocalStorageData
  try {
    getLocalStorageData = JSON.parse(localStorage.getItem('localContacts'))
  }
  catch {
    console.log('błąd')
  }
  if (getLocalStorageData === null) {
    getLocalStorageData = array
    console.log(getLocalStorageData)
    }
    return getLocalStorageData
}
