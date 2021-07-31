import React from 'react'
import './style.css'
import Card from '../cards/index'
import Widget from '../widget/index'
import Miniwidget from '../miniwidget/index'
import Scrollreveal from 'scrollreveal'

export default function Rightside(){


    //Setting ScrollReaveal
    let sr= Scrollreveal({
        origin:'top',
        duration:1000,
        distance:'50px',
        reset:true
    })

    sr.reveal('.rightSideContainer .anime', {interval:350})

    return(
        <div className="rightSideContainer">
            <nav>
                <ul>
                    <li className='anime'>
                        <Card title='Eficiencia' >
                            <div className="activityProject">
                                <div className="upWidget">
                                    <Widget name='Actividades' equival='23/106' percent='50%' size='48%' backColor='var(--blue)'/>
                                    <Widget name='Projectos' equival='23/106' percent='50%' size='48%' backColor='var(--green)'/>
                                </div>                        
                                <Widget name='Total' equival='23/106' percent='50%' size='100%' backColor='var(--oragen)'/>
                            </div>
                            <div className="bottomWidgets">
                                <Miniwidget title='Eficiencia'>
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                </Miniwidget>
                                <Miniwidget title='Eficiencia'>
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                </Miniwidget>
                                <Miniwidget title='Eficiencia'>
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                    <li><p>Pendentes</p> <p>3</p></li> 
                                </Miniwidget>
                            </div>
                        </Card>
                    </li>

                    <li className='anime'>
                        <Card title='Aniversariantes'> 
                            <div className="innerContent">
                                <p>Nenhum dos seus amigos comemora <br/>aniversario hoje</p>
                            </div>
                        </Card>
                    </li>

                    <li className='anime'>
                        <Card title='Pendencias' date='Seg, 21 de Jun'> 
                            <div className="innerContent">
                                <p>Voce nao possui nenhuma pendencia para<br/> hoje</p>
                            </div>
                        </Card>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}