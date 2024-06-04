import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value} {props.units}</td></tr>

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} units="%" />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodFeedback = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAverage((updatedGood - bad) / (updatedGood + neutral + bad))
    setPositive(updatedGood * 100 / (updatedGood + neutral + bad))
  }

  const handleNeutralFeedback = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAverage((good - bad) / (good + updatedNeutral + bad))
    setPositive(good * 100 / (good + updatedNeutral + bad))
  }

  const handleBadFeedback = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAverage((good - updatedBad) / (good + neutral + updatedBad))
    setPositive(good * 100 / (good + neutral + updatedBad))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGoodFeedback} />
      <Button text="neutral" handleClick={handleNeutralFeedback} />
      <Button text="bad" handleClick={handleBadFeedback} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive}/>
    </div>
  )
}

export default App