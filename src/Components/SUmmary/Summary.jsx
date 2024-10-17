import React from 'react'

function Summary() {
  return (
    <div className='Summary-page'>
      <div style={{fontWeight:'700',color:'gray',height:'8%'}}>Quotation Summary</div>
      <div className='des-box'>
        <div className='box-2'>
            <div className='one-line'>
                <div style={{width:'30%'}}>DESCRIPTION</div>
                <div style={{width:'33%',display:'flex',justifyContent:'center'}}>QTY</div>
                <div>AMOUNT</div>
            </div>
            <div  className='one-line'>
                <div style={{width:'30%'}}>Total Amount</div>
                <div style={{width:'33%',display:'flex',justifyContent:'center'}}>3</div>
                <div>$ 3,600.00</div>
            </div>
            <div  className='one-line'>
                <div style={{width:'30%'}}>Total Discount</div>
                <div style={{width:'33%',display:'flex',justifyContent:'center'}}>10%</div>
                <div>-$ 100.00</div>
            </div>
            <div  className='one-line'>
                <div style={{width:'30%'}}>Total Refundable</div>
                <div style={{marginLeft:'-35px'}}>0%</div>
                <div>$ 0</div>
            </div>
            <div  className='one-line'>
                <div style={{width:'30%'}}>Total Tax</div>
                <div style={{width:'33%',display:'flex',justifyContent:'center'}}>18%</div>
                <div>$ 648.00</div>
            </div>
        </div>
        <div className='amount'>
          <div>Quote Amount</div>
          <div> $ 4,148.00</div>
        </div>
      </div>
    </div>
  )
}

export default Summary
