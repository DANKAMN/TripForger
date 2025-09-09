import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Pricing = () => {
  return (
    <div className="mt-20">
        <h2 className="font-bold text-3xl my-5 text-center">AI-Powered Trip Planning - Choose your Plan</h2>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '0 1rem' }}>
                <PricingTable />
        </div>
    </div>
  )
}

export default Pricing