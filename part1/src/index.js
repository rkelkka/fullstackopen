import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
	const Header = (props) => {
		return (
			<h1>{props.course}</h1>			
		)
	}
	
	const Part = (props) => {
		return (
			<p>{props.part} {props.exercisesCount}</p>			
		)
	}

	const Content = (props) => {
		let naivePartId = 1;
		const renderPart = (part) => (
			<Part key={naivePartId++} part={part.part} exercisesCount={part.exCount} />
		)
		return (
			<div>
				{props.parts.map(renderPart)}
			</div>
		)
	}

	const Total = (props) => {
		return (
			<p>Number of exercises {props.count}</p>
		)
	}

	const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
			<Content parts={[{part: part1, exCount: exercises1}, {part: part2, exCount: exercises2}, {part: part3, exCount: exercises3}]} />
      <Total count = {exercises1 + exercises2 + exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))