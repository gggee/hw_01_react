import React from 'react';
import image from "./img/user_icon.png"
import './css/resume_stl.css';

function Info(props) {
    return (
        <div className="block">
            <h1 className='title'>{props.title}</h1>
            <div className="info_person">
                <img src={props.poster} alt={`${props.title} Постер`} className='img_resume' />
                <p className='p_resume'><strong>FIO:</strong> {props.fio}</p>
                <p className='p_resume'><strong>Phone:</strong> {props.phone}</p>
                <p className='p_resume'><strong>Email:</strong> {props.email}</p>
            </div>
            <div className='block_experience'>
                <h2 className='h2_resume'>{props.experience}</h2>
                <p className='exp'>{props.exp_1}</p>
                <p className='p_exp'>{props.examp_1_exp}</p>
                <p className='exp'>{props.exp_2}</p>
                <p className='p_exp'>{props.examp_2_exp}</p>
            </div>
            <div className='block_education'>
                <h2 className='h2_resume'>{props.education}</h2>
                <p className='edu'>{props.edu_info_1}</p>
                <p className='p_edu'>{props.edu_name_1}</p>
                <p className='edu'>{props.edu_info_2}</p>
                <p className='p_edu'>{props.edu_name_2}</p>
            </div>
        </div>
    );
}

const Resume = () => {
    return (
        <Info
            title="Resume"
            fio="Claudia Alves"
            phone="123-456-7890"
            email="hello@reallygreatsite.com"
            poster={image}
            experience='Experience'
            exp_1='2022
            freelancer Copywriter'
            examp_1_exp='ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non urna erat nam at.'
            exp_2='2019-2020
            fauget copywriter'
            examp_2_exp='integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate.'
            education='Education'
            edu_info_1='2016 - 2020
            Bachelor of Journalism'
            edu_name_1='Really Great University'
            edu_info_2='2014 - 2016
            Secondary School'
            edu_name_2='Really Great High School'
        />
    );
}

export default Resume;
