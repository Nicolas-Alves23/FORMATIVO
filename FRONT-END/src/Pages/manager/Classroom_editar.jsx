import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const schemaClassroom = z.object({
    nome: z.string()
        .min(1, 'Informe ao menos um caractere')
        .max(100, 'Informe ao menos um caractere'),
    tamanho: z.number()
        .int("Deve ser um número inteiro")
        .min(1, 'Informe ao menos um caractere')
        .max(200, 'Informe ao menos um caractere'),
    capacidade: z.number()
        .int("Deve ser um número inteiro")
        .min(1, 'Informe ao menos um caractere')
        .max(100, 'Informe ao menos um caractere'),
});

export function Classroom_editar(){
    const[saça,setSala] = useState([]);
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
        async function buscarSala(){
            try{
                const token = localStorage.getItem('access_token');
                const response = await axios.get(`http://127.0.0.1:8000/api/sala_crud/${id}`, {
                    Headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setSala(response.data);
                reset(response.data);

            } catch(error){
                console.error("Erro ao carregar a sala", error);
            }
        }
        buscarSala();
    }, [id, reset]);

    async function obterDadosFormulario(data){
        console.log("Dados do formulário: ", data);
        try{
            const token = localStorage.getItem('access_token');

            const response = await axios.put(
                `http://127.0.0.1:8000/api/sala_crud/${id}`,
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Sala atualizada', response.data);
            alert('Sala atualizada com sucesso!');
            reset();
            navigate('/home');

        }catc
    
}