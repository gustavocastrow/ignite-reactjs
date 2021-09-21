import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]) //armazenando uma listagens de repos
    //repositories: variavel
    //setRepositories: funcao para alterar o valor da variavel repositories

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
    //useEffect()
        //1parametro: qual função eu desejo executar 
        //2parametro: quando eu quero executar a primeira funcao
        //Se eu passar um array vazio como segundo parametro a primeira funcao sera executada apenas uma unica vez

    console.log(repositories)
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}