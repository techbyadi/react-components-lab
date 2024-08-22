const WeatherData = (props) => {
  const {day, conditions, time} = props
  return (
    <>
    {day}
    {conditions}
    {time}
    </>
    
  )
}

export default WeatherData;