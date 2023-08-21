import "./FormInput.scss";

function FormInput({label, ...otherProps}){
    // const {label,type,name,value,onChange} = props
    return(
        <div className="group">
            <input  className="form-input" {...otherProps}/>
            {label && 
                (<label className={`${otherProps.value.length>0? "shrink": null} form-input-label`}>{label}</label>)
            }   
        </div>
    )
}

export default FormInput;