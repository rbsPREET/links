import React from 'react'
import ProfileImg from '../assets/images/profile.jpg'
import { RiProfileLine, RiLinkedinBoxLine, RiGithubLine, RiFacebookBoxLine } from 'react-icons/ri'

const redirects = [
    {
        _id: 1,
        name: "Portfolio",
        hrefLink: "https://rbs-portfolio.netlify.app/   ",
        icon: <RiProfileLine size={20} />
    },
    {
        _id: 2,
        name: "Linkedin",
        hrefLink: "https://www.linkedin.com/in/rotembarsela/",
        icon: <RiLinkedinBoxLine size={20} />
    },
    {
        _id: 3,
        name: "GitHub",
        hrefLink: "https://github.com/rbsPREET",
        icon: <RiGithubLine size={20} />
    },
    {
        _id: 4,
        name: "Facebook",
        hrefLink: "https://www.facebook.com/rotem.barsela/",
        icon: <RiFacebookBoxLine size={20} />
    },
]

const Content = () => {
    return (
        <div className='flex flex-col gap-10 w-80 items-center z-10'>
            <img src={ProfileImg} alt='profile' className='rounded-full w-36 h-36 md:w-44 md:h-44 border-4 border-black/50' />
            {redirects.map((item) => (
                <a key={item._id} href={item.hrefLink} target='_blank' rel='noreferrer' className='btn'>
                    {item.icon}
                    {item.name}
                </a>
            ))}
        </div>
    )
}

export default Content