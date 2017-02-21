

export default function Position(){

  const listeners = []

  if(!(this instanceof Position)){
    console.warn('Position called without instantiating')
    return new Position()
  }

  function addListener(listener){
    listeners.push(listener)
  }

  function onGeoLocationSuccess(pos){
    listeners.map(listener => listener(pos))
  }

  function onGeoLocationError(err){
    console.warn(err)
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const handle = navigator.geolocation.watchPosition(onGeoLocationSuccess, onGeoLocationError, options)

  return {
    addListener
  }
}
