'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div>
        <CountUp
            duration={2.75}
            dec
            decimal=","
            prefix="$"
            end ={amount}
        />
    </div>
  )
}

export default AnimatedCounter