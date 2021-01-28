import React from 'react'
import s from './style.module.css'

const Layout = (props) => {
    return (
        <section className={s.root} id={props.id} 
            style={{
                backgroundColor: props.colorBg ? props.colorBg : "",
                backgroundImage: props.urlBg ? "url(" + props.urlBg + ")"  : ""
            }}
        >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc && s.full}>
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout