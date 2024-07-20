import './Checkbox.sass';

const Checkbox = ({title, name, type}) => {

    return (
        <div className="form-checkbox">
            <label htmlFor={name} className="form-checkbox__label">
                <input className="form-checkbox__checkbox" type="checkbox" name={name} id={name}/>
                <span></span>
                <div className="form-checkbox__title">
                    {title}
                </div>
            </label>
        </div>
    );
}

export default Checkbox;