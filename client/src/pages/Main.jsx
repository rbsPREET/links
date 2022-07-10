import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Content from '../components/Content'

const Main = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color1: 0x4b4b5f,
                color2: 0x20202,
                wingSpan: 35.00,
                speedLimit: 3.00,
                separation: 96.00,
                quantity: 3.00,
                backgroundAlpha: 0.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div ref={myRef} className='h-screen flex justify-center items-center'>
            <Content />
        </div>
    )
}

export default Main