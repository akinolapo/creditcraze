'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:) => {
  return (
    <div>
        <CountUp end ={100}/>
    </div>
  )
}

export default AnimatedCounter