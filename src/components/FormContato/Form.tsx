import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast'
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();





    if (loading) return;

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      setNome('');
      setEmail('');
      setMensagem('');
      fetch('/api/contact', {
        method:'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name: nome,
          email: email,
          message: mensagem
        })
        
      })
      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.success,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={mensagem}
        onChange={({ target }) => setMensagem(target.value)}
      />
      <button  type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}