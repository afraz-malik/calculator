import React from 'react';
import './calcBody.css'

export const calcBody = ({getValue}) => {
	return (

		<div className='calcBody' id='demo'>
			<button className="top" name='dummy' onClick={e => getValue(e.target.name)}>%</button>
			<button className="top" name='dummy' onClick={e => getValue(e.target.name)}>x/2</button>
			<button className="top" name='dummy' onClick={e => getValue(e.target.name)}>x^2</button>
			<button className="top" name='dummy' onClick={e => getValue(e.target.name)}>1/x</button>

			<button name='CE' onClick={e => getValue(e.target.name)}>CE</button>
			<button name='C' onClick={e => getValue(e.target.name)}>C</button>
			<button className="" name='back' onClick={e => getValue(e.target.name)}>back</button>
			<button className="o" name='/' onClick={e => getValue(e.target.name)}>/</button>

			<button className="n" name='7' onClick={e => getValue(e.target.name)}>7</button>
			<button className="n" name='8' onClick={e => getValue(e.target.name)}>8</button>
			<button className="n" name='9' onClick={e => getValue(e.target.name)}>9</button>
			<button className="o" name='*' onClick={e => getValue(e.target.name)}>x</button>

			<button className="n" name='4' onClick={e => getValue(e.target.name)}>4</button>
			<button className="n" name='5' onClick={e => getValue(e.target.name)}>5</button>
			<button className="n" name='6' onClick={e => getValue(e.target.name)}>6</button>
			<button className="o" name='-' onClick={e => getValue(e.target.name)}>-</button>

			<button className="n" name='1' onClick={e => getValue(e.target.name)}>1</button>
			<button className="n" name='2' onClick={e => getValue(e.target.name)}>2</button>
			<button className="n" name='3' onClick={e => getValue(e.target.name)}>3</button>
			<button className="o" name='+' onClick={e => getValue(e.target.name)}>+</button>

			<button className="n" name='.' onClick={e => getValue(e.target.name)}>.</button>
			<button className="n" name='0' onClick={e => getValue(e.target.name)}>0</button>
			<button className="n" name='.' onClick={e => getValue(e.target.name)}>.</button>
			<button className="o" name='=' onClick={e => getValue(e.target.name)}> =</button>
		</div>
	)
}
export default calcBody;