import currencyFormatter from 'currency-formatter'

export const crcFormat = value => 
  currencyFormatter.format(value, {code:'CRC'})