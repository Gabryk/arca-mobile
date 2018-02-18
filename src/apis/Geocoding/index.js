import Geocoder from 'react-native-geocoder'

const API_KEY = 'AIzaSyA63YW7TSm-rsbOTywxzDmUb06NkTZBgkU'
Geocoder.fallbackToGoogle(API_KEY)

export const coordsToAddress = coords => (
  Geocoder.geocodePosition({
    lat: coords.latitude,
    lng: coords.longitude
  })
  .then( address => ({address, coords}))
)
const options = {
  enableHighAccuracy: false,
  timeout: 10000,
  maximunAge: 30000,
}

export const getCurrentPosition = () => (
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords
        //console.log("Current position", position.coords)
        resolve({ latitude, longitude })
      },
      err => {
        reject(err)
      },
      options
    )
  })
)

export default Geocoder