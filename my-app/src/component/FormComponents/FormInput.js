import useFormContext from "../../hooks/useFormContext"
import FormSystems from "./FormApplications"
import FormPriority from "./FormApplications"
import FormApplications from "./FormApplications"

const FormInput = () => {

    const { page } = useFormContext()

    const display = {
        0: <FormSystems />,
        1: <FormPriority/>,
        2: <FormApplications />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormInput