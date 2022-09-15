// This function receive the hour as a string and convert to minutes
// 20:00 -> ["20", "00"] => [20, 00] -> 1200

export function convertHourStringToMinutes(hourString: string){
  const [hours, minutes] = hourString.split(":").map(Number)

  const minutesAmount = (hours * 60) + minutes

  return minutesAmount
}