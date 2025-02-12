
import InnerNavbar from './../InnerNavbar/InnerNavbar';
import { useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { url } from '../Common/Constant';
import './DeleteBus.css'
const DeleteBus = () => {
    let history = useHistory()
    const location = useLocation()
    const bus = JSON.parse(sessionStorage.getItem("bus"))
    console.log(bus)
    const [busId, setBusId] = useState(bus.busId)

    const deleteBus = () => {
        //const id= bus.busId

        //history.push('/agency/buses')
        axios.delete(url + '/bus/deleteBus/' + busId).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                alert('Bus Deleted Successfully')
                history.push('/agency/buses')

            } else {
                alert('Bus Not Deleted')
                console.log(result.error)

            }
        })
    }


    return (
        <div className="body1">

            <InnerNavbar />
            <div class="container row">
                <div className="list3">
                    <h3 className="label1">Bus</h3>
                    <table className="table table-responsive table-striped table-hover styled-table">
                        <thead>
                            <tr>
                                <th>Bus Id</th>
                                <th>Bus Number</th>
                                <th>Bus Type</th>
                                <th>Bus Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{bus.busId}</td>
                                <td>{bus.busNo}</td>
                                <td>{bus.type}</td>
                                <td>{bus.model}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Would you want to Delete?</h3>
                    <table className="   styled-table">
                        <thead>
                            <th></th>

                            <th></th>
                        </thead>
                        <tbody>
                            <td><button type="button" className="delBtn" onClick={deleteBus}>Yes</button></td>

                            <td><button type="button" className="edtBtn" onClick={() => { window.location = "/agency/buses" }}>cancel</button></td>
                        </tbody>
                    </table>
                </div>

            </div>


        </div>



    )
}

export default DeleteBus