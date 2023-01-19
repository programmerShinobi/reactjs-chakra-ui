import React, { useState } from 'react';
import KirimNamaChild from './KirimDataNamaChild';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const KirimNamaObject = (props) => {
    const [data, serFirstName] = useState({
        firstName: 'Faqih',
        lastName: 'Pratama Muhti'
    });

    // serFirstName('Shinobi')
    return (
        <div>
            <header className="App-custom">
                <div className="mt-4 mb-4 mx-4 d-flex justify-content-center align-items-center text-center">
                    <div className="color-custom-bg" style={{ width: '500px' }}>
                        <div className="card-body">
                            <KirimNamaChild nama={data.firstName} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default KirimNamaObject;