import {LocaleConfig} from 'react-native-calendars'
import moment  from 'moment'

const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const monthShort = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
const day = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const dayShort = ['Dom','Lun','Mar','Mir','Jue','Vie','Sab']
const calendar = {
  lastDay : '[Ayer a las] LT',
  sameDay : '[Hoy a las] LT',
  nextDay : '[Mañana a las] LT',
  lastWeek : 'dddd [pasado] [a las] LT',
  nextWeek : 'dddd [a las] LT',
  sameElse : 'L'
}

LocaleConfig.locales['sp'] = {
  monthNames: month,
  monthNamesShort: monthShort,
  dayNames: day,
  dayNamesShort: dayShort,
}
moment.updateLocale('sp', {
  months: month,
  monthsShort: monthShort,
  weekdays: day,
  weekdaysShort: dayShort,
  calendar: calendar,
})
moment.locale('sp')
LocaleConfig.defaultLocale = 'sp'