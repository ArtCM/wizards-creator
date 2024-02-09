"use client"
import React, { useState } from 'react';
import useListaStore from '@/store/addInput';

const Builder: React.FC = () => {
    const { itens, adicionarItem, removerItem } = useListaStore();

    const [valorInput, setValorInput] = useState('');
  
    const handleAdicionarTexto = () => {
      // Adiciona o novo item com o valor do input
      adicionarItem('texto', valorInput);
      // Limpa o valor do input após adicionar
      setValorInput('');
    };
  
    const handleAdicionarRadio = () => adicionarItem('radio');
    const handleAdicionarTextarea = () => adicionarItem('textarea');

    return (
        <div>
        <div>
            <button onClick={handleAdicionarTexto}>Adicionar Input Texto</button>
            <button onClick={handleAdicionarRadio}>Adicionar Radio Button</button>
            <button onClick={handleAdicionarTextarea}>Adicionar Textarea</button>
        </div>
        <div>
            <form action="">
                {itens.map((item, index) => (
                <div key={index} style={{ margin: '10px' }}>
                    {item.tipo === 'texto' && (
                        <input
                            type="text"
                            value={item.valor}
                            placeholder={valorInput}
                            onChange={(e) => setValorInput(e.target.value)}
                        />
                    )}
                    {item.tipo === 'radio' && <input type="radio" name="radio" value={item.valor} />}
                    {item.tipo === 'textarea' && <textarea value={item.valor} />}
                    <button onClick={() => removerItem(index)}>Remover</button>
                </div>
                ))}
                <button>Finalizar</button>
            </form>
        </div>
        </div>
  );
};

export default Builder;