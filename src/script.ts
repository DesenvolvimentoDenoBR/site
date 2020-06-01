//Dados
const DadosPostagens = [
    {Foto: '', Title: '', Date: ''},
    {Foto: '', Title: '', Date: ''},
    {Foto: '', Title: '', Date: ''}
  
];
//Componente Cidade
const CidadeList = (props) => {
  const content = props.DadosPostagens.map((data) =>
    <div className="card" key={data.id}>
      <div className="leftCard"></div>
      <div className="rightCard"></div>
    </div>
  );
  return (
    <div class="ListaCards">{content}</div>
  );
};

const App = () => {
  return (
    <div className="container">
      <CidadeList DadosPostagens={DadosPostagens} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("aplicacao"));