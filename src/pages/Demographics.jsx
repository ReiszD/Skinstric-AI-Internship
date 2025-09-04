import React from 'react'
import './Demographics.css'
import AnalysisNavbar from '../components/AnalysisNavbar'
import AITag from '../components/AITag'
import DemographicsFooter from '../components/DemographicsFooter'

const Demographics = () => {
  return (
    <div className='demographics'>
        <AnalysisNavbar />
        <AITag />
        <div className='demographics__description'>
            <h1>Demographics</h1>
          <p>Predicted Race & Age</p>
        </div>
      <DemographicsFooter />
    </div>
  )
}

export default Demographics
