import React, { Component } from "react";
import Head from 'next/head'
import "isomorphic-fetch";

// Nosso condigo e renderizado pelo Servidor e nosso codigo nao mais vai como JavaScript e sim como HTML Estatico.
// Para rodar "npm run dev"
// Um teste para verificar se esta funcionando e desativar o JavaScript do seu navegador e ve que a pagina carrega normalmente, no React comum isso nao iria funcionar!
// Esta pratica melhora o SEO do seu Site

// 1. Criar a pastado seu projeto
// 2. Dentro da pasta dar "npm init -y"
// 3. Instalar "npm install react react-dom next"
// 4. Adicionar script no package.json {"dev": "next", "build": "next build", "start": "next start"}
// "dev": "next" - Inicia o servidor, porem em modo de Desenvolvimento.
// "build": "next build" - Faz o build da aplicacao.
// "start": "next start" - Inicia o servidor, porem em modo de Producao.
// 5. Criar um diretorio pages, e colocar todas as paginas do projeto la.

export default class Home extends Component {
    static getInitialProps = async () => {
        const response = await fetch("https://api.github.com/orgs/rocketseat/repos");
        return { 
            repositories: await response.json() 
        };
    };
    
    render() {
        return (
            <div>
                <Head>
                    {/* Definindo um titulo para a pagina com Next.js */}
                    <title>Next.JS</title>
                    {/*  */}
                    <meta name="robots" content="index/follow" />
                    <meta name="description" content="Site para teste do Next.js"/>
                </Head>
                {this.props.repositories.map(repo => (
                <h1 key={repo.id}>
                    {repo.name}
                </h1>))}
            </div>
        );
        }
}