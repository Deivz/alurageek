import logo from '@/images/Logo.png';
import { TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { regExName } from '@/utils/regexValidation';
import ErrorField from '@/components/ErrorField/ErrorField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/router';
import { SearchContext } from '@/contexts/SearchContexts';
import Lens from '@/components/Lens/Lens';
import Link from 'next/link';
import PrimaryButton from '../PrimaryButton/PrimaryButton';


export default function DefaultPage() {

  const { search, setSearch } = useContext(SearchContext);

  const schema = z.object({
    nome: z.string().regex(regExName).max(40).min(1),
    mensagem: z.string().min(1).max(120)
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const [active, setActive] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loginOuProdutos, setLoginOuProdutos] = useState(false);

  const router = useRouter();

  function toggleSearchBarVisibility() {
    setActive(!active);
  }

  function enviarMensagem() {
    alert("Mensagem enviada com sucesso!");
    reset();
  }

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      setLogado(true);
    }

    if (window.location.pathname === '/login' || window.location.pathname === '/produtos') {
      setLoginOuProdutos(true);
    } else {
      setLoginOuProdutos(false);
    }

  }, [[location]]);

  return (
    <>
      <header>
        <div className={ativo ? `${styles.topo} ${styles.ativo} container` : `${styles.topo} container`} >
          <h1>
            <Link href='/'>
              <img src={logo} alt='Logo da Alura Geek' className={styles.logo__topo} />
            </Link>
          </h1>
          <div className={styles.login}>
            {
              (logado && !loginOuProdutos) &&
              <Link href='produtos'>
                <BotaoSecundario texto='Menu administrador' classe='menuAdministrador' />
              </Link>
            }
            {
              (!logado && !loginOuProdutos) &&
              <Link to='login'>
                <BotaoSecundario texto='Login' classe='login' />
              </Link>
            }
          </div>
          <div className={styles.lupa} onClick={ativarBusca}>
            <Lens />
          </div>
          <form className={styles.buscar} onSubmit={enviar}>
            <input type='text' placeholder='O que deseja encontrar?' className={styles.campo__busca} onChange={(e) => setBusca(e.target.value)} />
            <i className={styles.icone__lupa} onClick={enviar} ><Lupa /></i>
            <i className={styles.icone__fechar} onClick={ativarBusca} >X</i>
          </form>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className={styles.rodape__secaoUm}>
          <div className={`${styles.rodape} container`}>
            <nav className={styles.nav__rodape}>
              <h2 className={styles.logo__rodape}><img src={logo} alt='Logo da Alura Geek' /></h2>
              <ul className={styles.lista__rodape}>
                <li>Quem somos nós</li>
                <li>Política de privacidade</li>
                <li>Programa fidelidade</li>
                <li>Nossas lojas</li>
                <li>Quero ser franqueado</li>
                <li>Anuncie aqui</li>
              </ul>
            </nav>
            <form className={styles.formulario__rodape} onSubmit={handleSubmit(enviarMensagem)}>
              <fieldset>
                <legend>Fale conosco</legend>
                <div>
                  <TextField
                    {...register('nome')}
                    name='nome'
                    fullWidth
                    size="small"
                    label='Nome'
                    variant='filled'
                    sx={
                      {
                        "& .MuiInputLabel-root": { color: 'gray' },
                        "& .MuiInputBase-root": { backgroundColor: 'white', ":hover": { backgroundColor: 'white' } },
                        borderRadius: 4,
                        marginTop: 2,
                        marginBottom: 2,
                        label: { fontFamily: 'Raleway', fontSize: 16 }
                      }
                    }
                  />
                  {errors?.nome?.message && <ErrorField type={errors.nome.type} field="nome" />}
                </div>
                <div>
                  <TextField
                    {...register('mensagem')}
                    name='mensagem'
                    fullWidth
                    size="small"
                    label='Escreva sua mensagem'
                    variant='filled'
                    multiline
                    rows={3}
                    sx={
                      {
                        "& .MuiInputLabel-root": { color: 'gray' },
                        "& .MuiInputBase-root": { backgroundColor: 'white', ":hover": { backgroundColor: 'white' } },
                        borderRadius: 4,
                        marginTop: 2,
                        marginBottom: 2,
                        label: { fontFamily: 'Raleway', fontSize: 16 }
                      }
                    }
                  />
                  {errors?.mensagem?.message && <ErrorField type={errors.mensagem.type} field="mensagem" />}
                </div>
                <PrimaryButton text='Enviar mensagem' type='submit' variant='sendMessage' />
              </fieldset>
            </form>
          </div>
        </div>
        <div className={styles.rodape__secaoDois}>
          <p>Desenvolvido por Davi Oliveira</p>
          <p>2022</p>
        </div>
      </footer>
    </>

  );
}