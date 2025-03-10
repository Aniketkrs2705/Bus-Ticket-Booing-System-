import './TravellingDetails.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import UserNavbar from './../UserNavbar/UserNavbar';
import { url } from './../../common/Constants';
import UserLogIn from './../UserLogIn/UserLogIn';


const TravellingDetails = () => {
    const trip = JSON.parse(sessionStorage.getItem("bus"))
    
    const [pickingPoint,setPickingPoint] = useState("")
    const [droppingPoint,setDroppingPoint] = useState("")
    const [pickingPoints,setPickingPoints] = useState([])
    const [droppingPoints,setDroppingPoints] = useState([])
    const history = useHistory()
    
    const ProceedToPay = () => {
        sessionStorage.setItem("pickingPoint", pickingPoint)
        sessionStorage.setItem("droppingPoint", droppingPoint)
        history.push('/payment')
    }

    useEffect(() => {
      getPickingPoint()
    },[])

    useEffect(() => {
      getDroppingPoint()
    },[])
    
    const getPickingPoint = () => {
      const data = new FormData()
      data.append("fromStation",trip.fromStation)
      data.append("toStation",trip.toStation)

      axios.post(url + '/route/pickingpoints',data).then((response) => {
          const result = response.data
          if(result.status ==='success'){
              console.log(result.data)
              // alert('Successfull!')
              setPickingPoints(result.data)
              // console.log(pickingPoints)
              // history.push('/seatselection')
          }else{
              console.log(result.error)
              alert('Failed!...Please try again!')
          }
      })
    }

      const getDroppingPoint = () => {
        const data = new FormData()
        data.append("fromStation",trip.fromStation)
        data.append("toStation",trip.toStation)
  
        axios.post(url + '/route/droppingpoints',data).then((response) => {
            const result = response.data
            if(result.status ==='success'){
                console.log(result.data)
                // alert('Successfull!')
                setDroppingPoints(result.data)
                // console.log(pickingPoints)
                // history.push('/seatselection')
            }else{
                console.log(result.error)
                alert('Failed!...Please try again!')
            }
        })
  }
  if(sessionStorage.getItem("id")!==null){
    return (
        <div>
          <UserNavbar/>
          <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="drop1">
                        <div className="input-group-text bg-dark text-white">Picking Point</div>
                        <input className="form-control" list="picking" onChange={(event) => {setPickingPoint(event.target.value)}}/>
                        <datalist id="picking">
                        {pickingPoints.map((Start_point)=>{
                            return(
                            <option value={Start_point}/>
                            )
                        })}
                        </datalist>
                    </div>
                    <div className="drop2">
                        <span className="input-group-text bg-dark text-white">Dropping Point</span>
                        <input className="form-control" list="dropping" onChange={(event) => {setDroppingPoint(event.target.value)}}/>
                        <datalist id="dropping">
                        {droppingPoints.map((End_point)=>{
                            return(
                            <option value={End_point}/>
                            )
                        })}
                        </datalist>

                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-primary button" onClick={ProceedToPay}>Proceed To Pay</button>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>    
        </div>
        </div>
    )}else{return(<UserLogIn/>)}
   }
export default TravellingDetails