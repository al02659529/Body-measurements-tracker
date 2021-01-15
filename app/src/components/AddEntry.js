import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import measurementsService from '../services/measurementsService'
import './AddEntry.css'
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux'
import { setMeasurements } from "../reducers/measurements/measurementsReducer";
import { setMeasurementsHistory } from "../reducers/measurements/measurementsHistoryReducer";
import { setMeasurementInputValue } from "../reducers/measurements/measurementInputValueReducer";
import { setSelectedMeasurement } from "../reducers/measurements/selectedMeasurementReducer";
import { setSelectedDate } from "../reducers/measurements/dateReducer";
import { setButtonText } from "../reducers/measurements/buttonTextReducer";
import { setIsInputInvalid } from "../reducers/measurements/InvalidInputReducer";
import { setSelectedMeasurementHistory } from "../reducers/measurements/selectedMeasurementHistoryReducer";
import "react-datepicker/dist/react-datepicker.css";


const AddEntry = () => {
    const dispatch = useDispatch()
    const measurements = useSelector(state => state.measurements)
    const measurementsHistory = useSelector(state => state.measurementsHistory)
    const selectedMeasurement = useSelector(state => state.selectedMeasurement)
    const measurementValue = useSelector(state => state.selectedMeasurementInputValue)
    const selectedDate = useSelector(state => state.selectedDate)
    const buttonText = useSelector(state => state.buttonText)
    const isInputInvalid = useSelector(state => state.isInputInvalid)
    const selectedMeasurementHistory = useSelector(state => state.selectedMeasurementHistory)
    const [startDate, setStartDate] = React.useState(new Date())
    const regexForInput = /^\d+(?:\.\d{1,4})?$/;

    useEffect(() => {
        measurementsService.getUserMeasurements().then(response => {
            const measurementsList = response.userMeasurements
            const measurementsWithValues = measurementsList.map(field => ({field, value: ''}))
            dispatch(setSelectedMeasurement(measurementsWithValues[0].field))
            dispatch(setMeasurements(measurementsWithValues))
            dispatch(setMeasurementsHistory(response.measurementsHistory))
            dispatch(setSelectedDate(moment(new Date()).format('YYYY-MM-DD')))
        }).catch(err => {
           console.log(err)})
    }, [])

    useEffect(() => {
        let allMeasurements = document.getElementsByClassName("app_measurements-field")
        allMeasurements = [...allMeasurements]
        // In charge of toggling selected class
        allMeasurements.forEach(element => {
            if (element.innerText === selectedMeasurement){
                const elementClasses = [...element.classList]
                if (elementClasses.includes("app_measurements-field-selected")){
                    return null
                }
                element.className += " app_measurements-field-selected"
                const measurementToChange = measurements.find(element => element.field === selectedMeasurement)
                dispatch(setMeasurementInputValue(measurementToChange.value))
            }else {
                const elementClasses = [...element.classList]
                if (elementClasses.includes("app_measurements-field-selected")){
                    element.classList.toggle('app_measurements-field-selected')
                }
            }
            // In charge of setting button text depending on index
            const currentIndex = measurements.findIndex(element => element.field === selectedMeasurement)
            const doesArrayContainFalseValues = measurements.map((element, index) => {
                if((measurements.length - 1) === index) {
                    return 0
                }else{
                    return element.value > 0
                }
            })
            // If field selected is the last tone
            if (measurements.length - 1 === currentIndex){
                //Array to verify if all other fields have values
                if (doesArrayContainFalseValues.includes(false)){
                    dispatch(setButtonText('Save'))
                }else { // CASE when all values have been entered and is in last field
                    measurementValue ? dispatch(setButtonText('Submit')) : dispatch(setButtonText('Save'))
                }
            }
            if (!measurementValue && !doesArrayContainFalseValues.includes(false)){
                dispatch(setButtonText('Save'))
            }
        })

    }, [measurements, selectedMeasurement, measurementValue])

  useEffect(() => {
      const selectedHistory = measurementsHistory.find(element => element.field === selectedMeasurement)
      if (selectedHistory){
          console.log(selectedHistory.data, selectedMeasurement)
          dispatch(setSelectedMeasurementHistory(selectedHistory.data))
      }
  }, [measurementsHistory, selectedMeasurement])

    const onDateChange = (date) => {
        console.log(date);
        dispatch(setSelectedDate(date))
    }

    const onSubmitInput = (e) => {
        e.preventDefault()

        const measurementToChange = measurements.find(element => element.field === selectedMeasurement)
        measurementToChange.value = measurementValue
        dispatch(setMeasurements([...measurements]))
        const currentIndex = measurements.findIndex(element => element.field === selectedMeasurement)
        console.log(currentIndex)
        const doesArrayContainFalseValues = measurements.map((element, index) => {
                return element.value > 0
        })
        // IF user has not entered value in another field it will be redirected to such field
        if (doesArrayContainFalseValues.includes(false)){
            const elementWithFalseValueIndex = doesArrayContainFalseValues.findIndex(element => element === false)
            console.log(measurements)
            dispatch(setSelectedMeasurement(measurements[elementWithFalseValueIndex].field))
            return 1
        } else {
            dispatch(setSelectedMeasurement(measurements[measurements.length - 1].field))
        }
        if (e.target.innerText === 'SUBMIT'){
            if (!selectedDate) {
                document.querySelector('.react-datepicker__input-container > input').focus()
            }
             // TODO: Define onSubmit behaviour of the form
        }
    }

    const selectField = (e) => {
        let element = e.target
        if (e.target.tagName === 'SPAN'){
            element = element.parentElement
        }
        dispatch(setSelectedMeasurement(element.innerText))
    }

    const onClose = (e) => {
        console.log(e, 'I was closed.');
    };

    const handleInput = (e) => {
        if (e.target.value === '' || regexForInput.test(e.target.value)) {
            dispatch(setIsInputInvalid(false));
        } else {
            dispatch(setIsInputInvalid(true));
        }
        dispatch(setMeasurementInputValue(e.target.value))
    }
    return (
        <>
                <div className="app">
                    <div className="measurements_wrapper">
                        <div className="app_measurements app_container">
                            <div className="app_measurements-title app_container-title">Measurements</div>
                            {measurements.map(field => (
                                <div key={field.field} onClick={selectField} className="app_measurements-field">
                                    <span className="app_measurements_text">{field.field}</span>
                                </div>
                            ))}
                        </div>
                        <div className="date_and_value_container">
                            <div className="app_date app_container">
                                <div className="app_date-title app_container-title">Date</div>
                                <div className="app_date-content">
                                    <div>
                                        {/*TODO: Make the input required and style the :required attributed to match :focus*/}
                                        <DatePicker onChange={onDateChange}
                                                    selected={startDate} />
                                    </div>
                                </div>
                            </div>
                            <div className="app_measurements_add app_container">
                                <div className="app_measurements_add-title app_container-title">Value</div>
                                <form onSubmit={onSubmitInput} className="app_measurements_add-field" style={{"display": "flex", "align-items": "center"}}>
                                    <div style={{"display": "flex", "flex-direction": "column", "align-items": "center"}}>
                                        <input required placeholder={selectedMeasurement} className="app_measurements_add-field-input" value={measurementValue} onChange={handleInput}/>
                                        {isInputInvalid && <div style={{ color: 'red' }}>Invalid input</div>}
                                    </div>
                                    {!isInputInvalid ? <button type="submit" className="btn btn--red m-lr-s">{buttonText}</button> :
                                        //FIXME: fix the transition hover effect
                                        <button style={{"transition": ""}} disabled>Disabled</button>}
                                </form>
                            </div>
                        </div>
                        <div className="history app_container">
                            <div className="app_container-title">{selectedMeasurement + " History"}</div>
                            <table>
                                <thead className="history_table-header">
                                <tr>
                                    <th>
                                        Date
                                    </th>
                                    <th>
                                        Value
                                    </th>
                                    <th>
                                        Change
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {selectedMeasurementHistory.map((field, index, array) => (
                                    <tr key={field.date} className="history_field">
                                        <td className="history_field-date">{field.date}</td>
                                        <td className="history_field-value">{field.value}</td>
                                        {array[index-1] ? <td className="history_field-value">{array[index].value - array[index - 1].value}</td> : <td className="history_field-value">{"-"}</td>}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default AddEntry;