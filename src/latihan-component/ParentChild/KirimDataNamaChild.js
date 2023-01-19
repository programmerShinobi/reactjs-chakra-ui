import React from "react"; import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const KirimNamaChild = (props) => {

    return (
        <div>
            <header className="App-custom">
                <div className="mt-4 mb-4 mx-4 d-flex justify-content-center align-items-center text-center">
                    <div className="card color-custom-bg" style={{ width: '500px' }}>
                        <div className="card-body">
                            <h2>Nama Karyawan adalah {props.nama}</h2>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default KirimNamaChild;