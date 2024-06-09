
import "./style.scss";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setThemeToggler } from '../../redux/themeToggler';



const ThemeTogglerComp = () => {

    const dispatch = useDispatch();

    const { themeToggler } = useSelector((state) => state);

    console.log(themeToggler)


    return (

        <div className="display">
            <label className="label toggle">
                <input type="checkbox" className="toggle_input"
                    checked={themeToggler}
                    onChange={() => dispatch(setThemeToggler())}
                />
                <div className={`toggle-control ${themeToggler ? "toggle-control_BackForDark" : "toggle-control_BackForLight"} `}></div>
            </label>
        </div>

    )
}

export default ThemeTogglerComp