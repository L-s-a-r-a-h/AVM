import { createContext, useState, useEffect } from "react";

const FormContext = createContext({})


export const FormProvider = ({ children }) => {

    const title = {
        0: 'Main Systems',
        1: 'Rank Systems',
        2: 'System Applications',
    }

    const [page, setPage] = useState(0)

    const [systems, setSystems] = useState([{
        systemName: [{
            systemRank: '',
            systemApplications: ['']
        }]

    }]);




    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setSystems(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const canNextPage1 = true;

    const canNextPage2 = true;

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    const {
        ...requiredInputs } = systems

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    const disablePrev = page === 0

    return (

        <FormContext.Provider alue={{ title, page, setPage, systems, setSystems, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext