import LocationServicesDialogBox from "react-native-android-location-services-dialog-box"

export default requestGPS = () => {
  return LocationServicesDialogBox.checkLocationServicesIsEnabled({
    message: `<h2>Requerimos permiso a tu ubicación</h2>
    Podremos hacerte estregas en tu ubicación exacta :D
    Activa el GPS para dar con tu ubicación.`,
    ok: "Activar",
    cancel: "Ignorar",
    enableHighAccuracy: false, // true => GPS AND NETWORK PROVIDER, false => ONLY GPS PROVIDER
    showDialog: true, // false => Opens the Location access page directly
    openLocationServices: true, // false => Directly catch method is called if location services are turned off
    preventOutSideTouch: true, //true => To prevent the location services popup from closing when it is clicked outside
    preventBackClick: true //true => To prevent the location services popup from closing when it is clicked back button
  })
}