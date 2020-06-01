"use strict";
//Dados
var DadosCidades = [
    { Foto: 'https://concursos.pontua.com/wp-content/uploads/2019/06/luz.jpg', Cidade: 'Luz', Estado: 'Minas Gerais', Temperatura: '18°' },
    { Foto: 'https://forumsbtvd.org.br/wp-content/uploads/images/noticias/Nota17.05.jpg', Cidade: 'Lagoa da Prata', Estado: 'Minas Gerais', Temperatura: '17°' },
    { Foto: 'https://mapio.net/images-p/83241995.jpg', Cidade: 'Moema', Estado: 'Minas Gerais', Temperatura: '17°' }
];
//Componente Cidade
var CidadeList = function (props) {
    var content = props.DadosCidades.map(function (data) {
        return React.createElement("div", { className: "card", key: data.id },
            React.createElement("div", { className: "CardHeader" },
                React.createElement("figure", { className: "ContainerPerfil" },
                    React.createElement("img", { src: data.Foto, className: "Perfil" }),
                    React.createElement("figcaption", { className: "Overlay" },
                        React.createElement("div", { className: "ContainerHeader" },
                            React.createElement("h2", null, data.Cidade),
                            React.createElement("h2", null, data.Estado),
                            React.createElement("h3", null,
                                React.createElement("i", { className: "fa fa-cloud" }),
                                " Temperatura: ",
                                data.Temperatura))))),
            React.createElement("div", { className: "CardBody" }),
            React.createElement("div", { className: "CardFooter" }));
    });
    return (React.createElement("div", { class: "ListaCidades" }, content));
};
var App = function () {
    return (React.createElement("div", { className: "container" },
        React.createElement(CidadeList, { DadosCidades: DadosCidades })));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("aplicacao"));