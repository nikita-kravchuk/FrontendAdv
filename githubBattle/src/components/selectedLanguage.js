import React from "react";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

const SelectedLanguage = (props) => (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li
                    key={index}
                    style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
                    onClick={props.updateLanguage}>
                        {language}
                </li>
                )
            )}
        </ul>
    )

export default SelectedLanguage;