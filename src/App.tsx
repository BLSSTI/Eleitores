import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react'
import { NewEleitorModal } from "./components/NewTransactionModal";
import { EleitoresProvider } from "./hooks/useTransactions";
import axios from 'axios';
const token = '1|zwrT0bU9Zo1RfcrzbiYRlqS5fPUgHWNOZgeU8M3t'
const config = {
  headers: { Authorization: `Bearer ${token}` }
};
axios.get('http://127.0.0.1:8001/api/eleitores/dat', config)
.then(response => {
	console.log(response.data)
})
.catch(error => {
	console.log(error)
});

Modal.setAppElement('#root');

export default function App() {
  const [isNewEleitorModalOpen, setIsNewEleitorModalOpen] = useState(false);
  
  function handleCloseNewEleitorModal(){
    setIsNewEleitorModalOpen(false);
  }
  function handleOpenNewEleitorModal(){
    setIsNewEleitorModalOpen(true);
  }

  return (
    <EleitoresProvider>
      <Header onOpenNewEleitorModal={handleOpenNewEleitorModal}/>
      <Dashboard />
      <NewEleitorModal 
      isOpen ={isNewEleitorModalOpen}
      onRequestClose={handleCloseNewEleitorModal}/>
      <GlobalStyle />
    </EleitoresProvider>
  );
}

