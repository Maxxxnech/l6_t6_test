# Пример использования порталов в React для создания модальных окон

Порталы позволяют рендерить элементы вне иерархии родительского компонента. Это может использоваться для создания объектов, возникающих вне основной разметки документа, например над ней, и не влияющих на разметку.

Основная иерархия компонентов восходит к App.js, далее к *index.js*, который рендерится в корневой *div id="app-root"* в index.html. Это - стандартная структура компонентов React.

>Мода́льное окно́ в графическом интерфейсе пользователя — окно, которое блокирует работу пользователя с родительским приложением до тех пор, пока пользователь это окно не закроет. Модальными преимущественно реализованы диалоговые окна. Также модальные окна часто используются для привлечения внимания пользователя к важному событию или критической ситуации.
[Модальное окно](https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D0%BE%D0%BA%D0%BD%D0%B)

Для создания модальных окон используется другой корневой элемент: *div id="modal-root"*. В index.css для него указан стиль z-index: 999, выносящий его над плоскостью основной разметки.
Рендерить в modal-root компоненты модального окна мы можем 
благодаря методу создания порталов *createPortal* библиотеки *react-dom*. 
```
ReactDOM.createPortal(child, container)
```





