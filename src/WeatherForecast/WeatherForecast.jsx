import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx'

const WeatherForecast = (props) => {
  const { day, img, imgAlt, conditions, time } = props
  return (
    <div className="weather">
      <h2>{day}</h2>
        <WeatherIcon 
        key = {img.id}
        img = {img}
        imgAlt = {imgAlt}
        />
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  )
}


export default WeatherForecast;