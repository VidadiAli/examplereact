import PropTypes from 'prop-types';

import { useState } from 'react';

const Userinfor = (props) => {


    const [name, setName] = useState("Vidadi Ali")
    const [age, setAge] = useState(23)
    const [programs, setPrograms] = useState(["html", "css", "js"])
    const [worker, setWorker] = useState({ name: "Developer", staj: 2 })


    const changeAge = (e) => {
        if (e.target.textContent == "23") {
            setAge(25)
        }
        else {
            setAge(23);
        }
    }

    const addElement = () => {
        setPrograms([...programs, "React", "Jquerry"]);
    }

    const changeObject = () =>{
        setWorker({...worker, name: "Full-stack"})
    }

    return (
        <div>
            <h1>Ad: {props.ad}</h1>
            <h2>Soyad: {props.soyad}</h2>
            <ul>
                {
                    props.ixtisas.map((ixtisaslar, sira) => (
                        <li key={sira}>
                            {ixtisaslar.title}
                        </li>
                    ))
                }
            </ul>


            <p>
                {props.adress.rayon} {props.adress.qasabe}
            </p>

            <p onClick={() => setName("Qafur")}>{name}</p>
            <p onClick={changeAge} >{age}</p>

            <ul>
                {
                    programs.map((programsChild, key1) => {
                        return <li key={key1}>
                            {programsChild}
                        </li>
                    })
                }
            </ul>


            <button onClick={addElement}>Add element</button>

            <p onClick={changeObject}>
                {worker.name} {worker.staj}
            </p>

        </div>
    )
}

Userinfor.propTypes = {
    ad: PropTypes.string.isRequired,
    soyad: PropTypes.string.isRequired,
    ixtisas: PropTypes.array.isRequired,
    adress: PropTypes.shape({ rayon: PropTypes.string, qasabe: PropTypes.string })
}

Userinfor.defaultProps = {
    ad: "Yoxdur",
    soyad: "Yoxdur"
}
export default Userinfor;