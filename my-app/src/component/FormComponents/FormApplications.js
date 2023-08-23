import useFormContext from "../../hooks/useFormContext"

// form page for mapping the applications to the mian systems
const FormApplications = () => {
    const { systems, handleChange } = useFormContext()
    

    const content = (<>
 
    <p>Please select the applications used in each system</p>
    
    
    </>)
    return content
}
export default FormApplications