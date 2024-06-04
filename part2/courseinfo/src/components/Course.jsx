const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><strong>Total of {sum} exercises</strong></p>

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </>
  )
}

const Course = ({course}) => {
    const total = course.parts.reduce((s, p) => p.exercises + s, 0)
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total sum={total} />
      </div>
    )
  }

  export default Course