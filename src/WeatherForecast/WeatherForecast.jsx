import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx'
import WeatherData from '../WeatherData/WeatherData.jsx'

const WeatherForecast = (props) => {
  const { day, img, imgAlt, conditions, time } = props
  return (
    <div className="weather">
      <h2><WeatherData
      day = {day}
      /></h2>
        <WeatherIcon 
        img = {img}
        imgAlt = {imgAlt}
        />
      <p><span>conditions: </span><WeatherData 
      conditions = {conditions}
      /></p>
      <p><span>time: </span><WeatherData 
      time = {time}
      /></p>
    </div>
  )
}


export default WeatherForecast;