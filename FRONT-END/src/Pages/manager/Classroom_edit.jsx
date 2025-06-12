import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Subject_Edit.module.css';

 
const schemaClassroom = z.object({
    nome: z.string()
        .min(1, 'Informe ao menos um caractere')
        .max(100, 'Informe até 100 caracteres'),
        
    capacidade: z.number()
        .int("Deve ser um número inteiro")
        .min(1, 'Informe ao menos um caractere')
        .max(100, 'Informe até 100 caracteres'),

    tamanho: z.number()
        .int("Deve ser um número inteiro")
        .min(1, 'Informe ao menos um caractere')
        .max(100, 'Informe até 100 caracteres'),
});
 
export function Classroom_edit() {
    const[sala, setSala] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();
 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(schemaClassroom)
    });
 
    useEffect(() => {
        async function buscarSala() {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.get(`http://127.0.0.1:8000/api/sala/${id}/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setSala(response.data);
                reset(response.data); // Agora sim: response.data é o objeto da sala

            } catch (error) {
                console.error("Erro ao carregar a sala", error);
            }
        }

        buscarSala();
    }, [id, reset]);
 
    async function obterDadosFormulario(data) {
      console.log("Dados do formulário:", data);
        try {
            const token = localStorage.getItem('access_token');
 
            const response = await axios.put(
                `http://127.0.0.1:8000/api/sala/${id}/`,
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
 
            console.log('Sala atualizada com sucesso!', response.data);
            alert('Sala atualizada com sucesso!');
            reset();
            navigate('/home');
 
        } catch (error) {
            console.error('Erro ao cadastrar sala', error);
            alert("Erro ao cadastrar sala");
        }
    }
 
    return (
        <div className='container'>
           
            <form onSubmit={handleSubmit(obterDadosFormulario)}>
                    <h2>Editar Sala</h2>
                    <label>Nome da sala</label>
                    <input
                        {...register('nome')}
                        placeholder="Sala"
                    />
                    {errors.nome && <p className={style.error}>{errors.nome.message}</p>}
               
 
                    <label >Capacidade de alunos</label>
                    <input
                        type="number"
                        {...register('capacidade', { valueAsNumber: true })}
                        placeholder="Capacidade de Alunos"
                    />
                    {errors.capacidade && <p className={style.error}>{errors.capacidade.message}</p>}
            

                    <label >Tamanho da sala</label>
                    <input
                        type="number"
                        {...register("tamanho", { valueAsNumber: true })}
                        placeholder="tamanho da sala"
                    />
                    {errors.tamanho && <p className='error'>{errors.tamanho.message}</p>}
                 <div>
                    <button className={style.submitButton} type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}