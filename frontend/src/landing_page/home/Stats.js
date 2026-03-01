import React from 'react'

function Stats() {
    return (
        <div className='container '>
            <div className='row'>
                <div className='col-6'>
                    <h3>Trust with confidence</h3>
                    <div className="mt-5">
                        <h4>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.6+ crore customers trust QuantumTrade with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="mt-5">
                        <h4>No spam or gimmicks</h4>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className="mt-5">
                        <h4>The QuantumTrade universe</h4>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="mt-5">
                        <h4>Do better with money</h4>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6">
                    <img src="media\images\ecosystem.png" style={{width:"105%"}}></img>
                    <div className='text-center'>
                        <a href='' className='mx-5'style={{textDecoration:"none"}}>Explore our project <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=''style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;