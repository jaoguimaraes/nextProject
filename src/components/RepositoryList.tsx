import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;

}

export function RepositoyList() {
    const [repositories, setRepositores] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/microsoft/repos')
        .then(response => response.json())
        .then(data => setRepositores(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>

        </section>
    );
}