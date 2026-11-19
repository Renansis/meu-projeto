function Formulario(props) {
  return (
    <div>
      <h3>{props.Criar}</h3>

      <label htmlFor="text"></label>
      <input
        id="text"
        type="text"
        placeholder="Digite o nome do produto"
        className="Input"
      />

      <label htmlFor="number"></label>
      <input
        className="Input"
        id="number"
        type="number"
        placeholder="Digite o valor do produto"
      />

      <label htmlFor="textDescricao"></label>
      <input
        id="textDescricao"
        type="text"
        placeholder="Digite a descrição do produto"
        className="Input"
      />

      <button
        className="Criar"
        onClick={props.onCriar}
      >
        {props.botao}
      </button>
    </div>
  );
}

export default Formulario;