import React from 'react'
import './Skills.css'
import ReactImage from '../../utils/REACT.png'
import { Icon } from "react-icons/io";
import { BiSearch } from "react-icons/bi"
import Button from './Button';
import ReactImg from '../../utils/REACT.png'
import ReduxImg from '../../utils/REDUX.png'
import TypescriptImg from '../../utils/TYPESCRIPT.png'
import GitImg from '../../utils/GIT.png'
import CssImg from '../../utils/CSS.png'
import HTML5Img from '../../utils/HTML5.png'
import PostgreSqlImg from '../../utils/POSTGRESQL.png'
import JavascriptImg from '../../utils/JAVASCRIPT.png'
import NodeJsImg from '../../utils/NODEJS.png'
import ExpressJsImg from '../../utils/EXPRESSJS.png'
import PhotoshopImg from '../../utils/PHOTOSHOP.png'
import BlenderImg from '../../utils/BLENDER.png'


const skills = [
    {
        name: 'React',
        url: ReactImg
    },
    {
        name: 'Redux',
        url: ReduxImg
    },
    {
        name: 'Typescript',
        url: TypescriptImg
    },
    {
        name: 'Git',
        url: GitImg
    },
    {
        name: 'Css',
        url: CssImg
    },
    {
        name: 'HTML5',
        url: HTML5Img
    },
    {
        name: 'React-Native',
        url: ReactImg
    },
    {
        name: 'Javascript',
        url: JavascriptImg
    },
    {
        name: 'PostgresSql',
        url: PostgreSqlImg
    },
    {
        name: 'Node Js',
        url: NodeJsImg
    },
    {
        name: 'Express Js',
        url: ExpressJsImg
    },
    {
        name: 'Photoshop',
        url: PhotoshopImg
    },
    {
        name: 'Blender',
        url: BlenderImg
    },
]

const Skills = () => {
    return (
        <div className='skill-container'>
                <h1>Habilidades</h1>
            <div className='skill'>
            {skills ? skills.map((skill, index) => (
                <Button key={index}
                name={skill.name} 
                image={skill.url}
                />
            )): <div></div>}
            </div>
        </div>
    )
}

export default Skills