import Image from "next/image";
import Misskey from "../img/misskey.png"
import Qiita from "../img/qiita.png"
import Zenn from "../img/zenn.svg"
import ScrapBox from "../img/scrapbox.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
export default function Icons() {
    return(
        <>
        <a href="https://misskey.systems/">
            <Image
                src={Misskey}
                alt="misskey"
                width={50}
                height={50}
            />
        </a>
        <a href="https://twitter.com/marny12345">
        <FontAwesomeIcon 
            icon={faXTwitter} 
            width={50}
            height={50}
            style={{color: 'black'}}
        />
        </a>
        <a href="https://github.com/marnysan111">
        <FontAwesomeIcon 
            icon={faGithub} 
            width={50}
            height={50}
            style={{color: 'black'}}
        />
        </a>
        <a href="https://qiita.com/Marny">
            <Image
                src={Qiita}
                alt="Qiita"
                width={50}
                height={50}
            />
        </a>
        <a href="https://zenn.dev/marnysan">
            <Image
                src={Zenn}
                alt="Zenn"
                width={50}
                height={50}
            />
        </a>
        <a href="https://scrapbox.io/marny-public/">
            <Image
                src={ScrapBox}
                alt="ScrapBox"
                width={50}
                height={50}
            />
        </a>
        </>
    )
}