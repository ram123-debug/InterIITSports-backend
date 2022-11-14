import React from 'react'
import DrawEntry from './DrawEntry'
function insertEntry(){
    return (
        <div className='col-lg-3 col-6'>
            <DrawEntry/>
        </div>
    )
}

const DrawsGame = (props) => {
  return (
    <>
        <div className='container mt-5'>
            <p className='fs-4 fw-bold text-center text-lg-start'>{props.game}</p>
            <div className='row mt-4'>
                {insertEntry()}
                {insertEntry()}
                {insertEntry()}
                {insertEntry()}
                {insertEntry()}
                {insertEntry()}
                {insertEntry()}
                {insertEntry()}
                {insertEntry()}
                {insertEntry()}
            </div>
        </div>
    </>
  )
}

export default DrawsGame