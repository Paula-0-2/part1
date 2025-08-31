import { useState } from 'react'

const Header = ({course}) => {
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, value}) => (

  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
) 

const Statistics = ({good, bad, neutral}) => {

  const total = good + bad + neutral
  console.log(total)

  if (total === 0) {

    return(
      <div>
        <Header course="statistics" />
        <p>No feedback given</p>
      </div>
    )

  }
  else{

    return(
      <>
        <Header course="statistics" />
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={total} />
            <StatisticsLine text="average" value={(good - bad) / total} />
            <StatisticsLine text="positive" value={(good / total) * 100 + " %"} />
          </tbody>
        </table>
      </>
    )
  }
  
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <Header course="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App