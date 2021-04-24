import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../services/api';

type EleitorInput = Omit<Eleitor,'id'> ;

interface Eleitor{
  id:number;
  nome: string;
  endereco: string;
  titulo: string;
  zona: string;
  secao: string;
  telefone: string;
  bairro: string;
  cidade: string;

}

interface EleitoresProviderProps{
  children: ReactNode;
}
interface EleitoresContextData{
  eleitores: Eleitor[];
  
  createEleitor: (eleitor: EleitorInput )=> Promise<void>
  
}
const EleitoresContext = createContext<EleitoresContextData>(
  {} as EleitoresContextData
);

export function EleitoresProvider({children}: EleitoresProviderProps){
  const [eleitores, setEleitores] = useState<Eleitor[]>([]);


  useEffect(()=>{
    api.get('eleitores')
    .then(response => setEleitores(response.data.eleitores));
  },[]);

  async function createEleitor(eleitorInput: EleitorInput){
   const response = await api.post('/eleitores',{
     ...eleitorInput, 
   })

   const { eleitor } = response.data;
   setEleitores([
     ...eleitores, eleitor,
   ]);
  }


  return (
    <EleitoresContext.Provider value={{eleitores, createEleitor}}>
      {children}
    </EleitoresContext.Provider>
     );
}

export function useEleitores(){
  const context = useContext(EleitoresContext) 
  return context;
}