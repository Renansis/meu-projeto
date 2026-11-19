import './App.css';

import produto from "./img/stocksnap-books-2596899_1920.jpg"

import Name from "./props"

import Produto2 from "./Protudo2"

import Formulario from './Forms';

import { useEffect } from 'react';

import { useState } from 'react';



function App() {

  const [produtos, setProdutos] = useState([
    {
      id: 1,
      titulo: "Iphone",
      preco: "3000 R$",
      texto: "Iphone é uma linha de smartphones",
      button: "Comprar",
      tipo: "celular"
    },
    {
      id: 2,
      titulo: "Carregador",
      preco: "",
      texto: "Os melhores carregadores você encontra aqui!",
      button: "Comprar",
      tipo: "acessorio"
    }
  ]);

  useEffect(() => {
    fetch('https://crudcrud.com/api/e9932bca01af400c812fb19c44890217')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }, [])

  const [carregando, setCarregando] = useState(false);

  function Carregamento() {
    setCarregando(true);

    setTimeout(() => {
      setCarregando(false);
    }, 5000);
  }


  return (


    <div className="App">


      <h1 className='titulo'>Loja de telefone</h1>

      <p className='texto1'>Sobre a TechCell – Sua loja de tecnologia
        A TechCell é uma loja especializada na venda de smartphones, acessórios e produtos de tecnologia, oferecendo aos clientes uma experiência de compra prática, segura e acessível. Trabalhamos com as principais marcas do mercado, como Apple, Samsung, Motorola e Xiaomi, disponibilizando uma grande variedade de modelos para atender às diferentes necessidades e preferências.

        Nosso compromisso é oferecer produtos de qualidade, preços competitivos e um atendimento de excelência. Em nossa loja, você encontra desde os modelos mais recentes até opções com ótimo custo-benefício, além de acessórios como capinhas, películas, carregadores, fones de ouvido e muito mais.

        Acreditamos que comprar um celular deve ser uma experiência simples e confiável. Por isso, nossa loja virtual foi desenvolvida para proporcionar uma navegação intuitiva, com informações detalhadas sobre cada produto, diferentes formas de pagamento e entrega segura em todo o Brasil.

        Na TechCell, a satisfação dos nossos clientes está sempre em primeiro lugar. Trabalhamos diariamente para acompanhar as novidades do mercado tecnológico e oferecer as melhores oportunidades para quem deseja estar sempre conectado.

        TechCell – Tecnologia que conecta você ao futuro!</p>


      <img src={produto} alt='Logo' className='Logo' />


      <h2 className='titulo2'>Protudos:</h2>

      {produtos.map((produto) => (
        produto.tipo === "celular" ? (
          <Name
        
            key={produto.id}
            preco={produto.preco}
            title={produto.titulo}
            texto={produto.texto}
            button={produto.button}
          />
        ) : (
          <Produto2
            key={produto.id}
            titulo={produto.titulo}
            preco={produto.preco}
            texto={produto.texto}
            button={produto.button}
          />
        )
      ))}
      <form className='Forms'>
        <Formulario
          Criar="Crie um Produto:"
          botao="Criar produto"
          onCriar={Carregamento}
        />

        {carregando && <p>Carregando...</p>}

      </form>


    </div>


  );
}

export default App;



