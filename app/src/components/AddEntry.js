import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Calendar } from "phosphor-react";
import { DatePicker, Card, Alert } from 'antd';
import measurementsService from '../services/measurementsService'
import './AddEntry.css'
import moment from "moment";

const AddEntry = () => {
    const [startDate, setStartDate] = useState();
    const [measurements, setMeasurements] = useState([])
    const [selectedMeasurement, setSelectedMeasurement] = useState('')
    const [measurementValue, setMeasurementValue] = useState('')
    const [buttomText, setButtomText] = useState('Save')
    const [isInputInvalid, setIsInputValid] = useState(false)
    const regexForInput = /^\d+(?:\.\d{1,2})?$/;

    useEffect(() => {
        measurementsService.getUserMeasurements().then(response => {
            const measurementsList = response.userMeasurements
            const measurementsWithValues = measurementsList.map(field => ({field, value: ''}))
            setSelectedMeasurement(measurementsWithValues[0].field)
            setMeasurements(measurementsWithValues)
        }).catch(err => {
           console.log(err)})
        const alert = document.querySelector('.ant-alert-error')
        alert.setAttribute('style', 'display:none')
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
                setMeasurementValue(measurementToChange.value)
            }else {
                const elementClasses = [...element.classList]
                if (elementClasses.includes("app_measurements-field-selected")){
                    element.classList.toggle('app_measurements-field-selected')
                }
            }
            // In charge of setting buttom text depending on index
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
                    setButtomText('Save')
                }else { // CASE when all values have been entered and is in last field
                    measurementValue ? setButtomText('Submit') : setButtomText('Save')
                }
            }
            if (!measurementValue && !doesArrayContainFalseValues.includes(false)){
                setButtomText('Save')
            }
            // const doesArrayContainFalseValues = measurements.map((element, index) => {
            //     if((measurements.length - 1) === index) {
            //         return 1
            //     }else{
            //         return element.value > 0
            //     }
            // })
            // // IF user has not entered value in another field it will be redirected to such field
            // if (doesArrayContainFalseValues.includes(false)){
            //     setButtomText('Save')
            // }else {
            //     setButtomText('Submit')
            // }
        })

    }, [measurements, selectedMeasurement, measurementValue])

    const onDateChange = (date, dateString) => {
        console.log(date, dateString);
        setStartDate(dateString)
    }

    const onSubmitInput = (e) => {
        e.preventDefault()
        if (!measurementValue){
            const alert = document.querySelector('.ant-alert-error')
            alert.removeAttribute('style')
        }
        const measurementToChange = measurements.find(element => element.field === selectedMeasurement)
        measurementToChange.value = measurementValue
        setMeasurements([...measurements])
        const currentIndex = measurements.findIndex(element => element.field === selectedMeasurement)
        console.log(currentIndex)
        const doesArrayContainFalseValues = measurements.map((element, index) => {
                return element.value > 0
        })
        // IF user has not entered value in another field it will be redirected to such field
        if (doesArrayContainFalseValues.includes(false)){
            const elementWithFalseValueIndex = doesArrayContainFalseValues.findIndex(element => element === false)
            console.log(measurements)
            setSelectedMeasurement(measurements[elementWithFalseValueIndex].field)
            return 1
        } else {
            setSelectedMeasurement(measurements[measurements.length - 1].field)
        }
        if (e.target.innerText === 'SUBMIT'){
            console.log("submitted")
        }
    }

    const selectField = (e) => {
        let element = e.target
        if (e.target.tagName === 'SPAN'){
            element = element.parentElement
        }
        setSelectedMeasurement(element.innerText)
    }

    const onClose = (e) => {
        console.log(e, 'I was closed.');
    };

    const handleInput = (e) => {
        if (e.target.value === '' || regexForInput.test(e.target.value)) {
            setIsInputValid(false);
        } else {
            setIsInputValid(true);
        }
        setMeasurementValue(e.target.value)
    }
    return (
        <div className="container">
            <SideBar page="AddEntry" />
            <div className="content">
                <TopBar />
                <div className="app">
                        <div className="app_date app_container">
                            <div className="app_date-title app_container-title">Date</div>
                            <div className="app_date-content">
                                <div>
                                    <DatePicker onChange={onDateChange}
                                                defaultValue={moment(new Date(), 'YYYY-MM-DD')}
                                                format="YYYY-MM-DD"
                                                placeholder="Select date"/>
                                </div>
                            </div>
                        </div>
                    <div className="measurements_wrapper">
                        <div className="app_measurements app_container">
                            <div className="app_measurements-title app_container-title">Measurements</div>
                            {measurements.map(field => (
                                <div key={field.field} onClick={selectField} className="app_measurements-field">
                                    <span className="app_measurements_text">{field.field}</span>
                                </div>
                            ))}
                        </div>

                    <div className="app_measurements_add app_container">
                        <div className="app_measurements_add-title app_container-title">Value</div>
                        <form onSubmit={onSubmitInput} className="app_measurements_add-field">
                                <input placeholder={selectedMeasurement} className="app_measurements_add-field-input" value={measurementValue} onChange={handleInput}/>
                                {isInputInvalid && <div style={{ color: 'red' }}>Invalid input</div>}
                            <Alert
                                message="Input error"
                                description="A valid number is required"
                                type="error"
                                closable
                                onClose={onClose}
                            />
                                <button type="submit" className="btn btn--red m-lr-s">{buttomText}</button>
                        </form>
                    </div>
                    </div>
                    <div className="app_measurements-history"></div>
                </div>
            </div>

        </div>
    )
}

export default AddEntry;