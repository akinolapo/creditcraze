import React from 'react'

const TotalBalanceBox = ({
  accounts= [], totalBanks, totalCurrentBalance
}:TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* DoughnutChart */}
      </div>
      <div className="flex"></div>
    </section>
  )
}

export default TotalBalanceBox