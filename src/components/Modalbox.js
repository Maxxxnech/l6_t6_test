import React, { PureComponent } from "react";
import ReactDOM from 'react-dom';

// Находим отдельный корневой элемент для модальных окон
const modalRoot = document.getElementById('modal-root');

// Компонент Modalbox - обертка для содержимого модального окна
// Содержимое подается в виде дочерних элементов в App.js
export default class Modalbox extends PureComponent {
    constructor(props){
        super(props);
        // Создаем вспомогательный контейнер, 
        // в который будем рендерить модальное окно
        this.rootDiv = document.createElement("div");
    }

    /* На этапе фиксации производим 
     добавление элементов к реальному DOM*/
    componentDidMount(){
        console.log('%cModalbox did mount to rootDiv', "color: darkgreen");
        // Добавляем вспомогательный контейнер вместе с модальным окном 
        // к коренвому контейнеру modalRoot
        modalRoot.appendChild(this.rootDiv);
        
        console.log('%c[rootDiv was appended to modal-root]', "color: green");
    }
    
    // Необходимо удалять добавленные конейнеры при размонтировании!
    // Размонтирование произойдет при изменении состояния App.js:
    // show: false приводит к условному рендерингу
    componentWillUnmount(){
        console.log('%cModalbox will unmount', "color:brown");
        // Удаляем вспомогательный контейнер из коренвого
        modalRoot.removeChild(this.rootDiv);
        
        console.log('%c[rootDiv was removed from modal-root]', "color: crimson");
    }
    render(){
        console.log('render')
        return(
            ReactDOM.createPortal(
           <div>
               {this.props.children}
           </div>, this.rootDiv)
        )
    }

}