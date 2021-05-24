import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  const addRepository = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o nome de um repositório!');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);

      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Não foi possível encontrar esse repositório');
    }
  };
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={addRepository}>
        <input
          type="text"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => {
          return (
            <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
              <img src={repository.owner.avatar_url} alt={repository.owner.login} />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          );
        })}
      </Repositories>
    </>
  );
};

export default Dashboard;
