import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVuejs, faReact, faGolang, faPython } from '@fortawesome/free-brands-svg-icons'
export default function Tech() {
    return(
        <>
            <FontAwesomeIcon 
                icon={faVuejs} 
                width={50}
                height={50}
                spin
                style={{color: '#42B883'}}
            />
            <FontAwesomeIcon 
                icon={faReact} 
                width={50}
                height={50}
                spin
                style={{color: '#61DAFB'}}
            />
            <FontAwesomeIcon 
                icon={faGolang} 
                width={50}
                height={50}
                spin
                style={{color: '#00ADD8'}}
            />
            <FontAwesomeIcon 
                icon={faPython} 
                width={50}
                height={50}
                spin
                style={{color: '#306998'}}
            />
        </>
    )
}