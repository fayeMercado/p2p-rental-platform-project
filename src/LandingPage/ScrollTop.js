import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { ArrowUpCircleFill } from "react-bootstrap-icons";


const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () =>
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return isVisible ? (
        <div className='scroll-top'>
            <a href='#top'>
                <ArrowUpCircleFill color="#184D47" size={50} />
            </a>
        </div>
    ) : null
}

export default ScrollTop;