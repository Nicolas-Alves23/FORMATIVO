import axios from "axios";
import React, { useState, useEffect } from "react";


export function DisciplinaProfessor() {
    const [disciplinas, setDisciplina] = useState([])

    // (parametro) {script} [dependencias]
    useEffect(() => {
        const token = localStorage.getItem('access_token');

        axios.get('http://127.0.0.1:8000/api/disciplina_professor/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setDisciplina(response.data);
            })
            .catch(error => {
                console.error("Erro", error);
            });
    }, []);

    return (
        <div>
            <h2>Minhas Disciplinas</h2>
            <div>
                {disciplinas.map(disciplinas => (
                    <div key={disciplinas.id}>
                        <h3>{disciplinas.nome}</h3>
                        <p><strong>Curso:</strong>{disciplinas.curso}</p>                        
                        <p><strong>Descrição:</strong>{disciplinas.descricao}</p>                        
                        <p><strong>Carga horário:</strong>{disciplinas.cargaHoraria}</p>                        
                    </div>   
                ))}

            </div>
        </div>

    );
}