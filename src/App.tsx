//import { useState } from 'react'
import './App.css';


import React , {useEffect, useState} from 'react';

//import './App.css'
// Bu şekilde import ediyorsunuz
//import Header from './components/Header'

// Eğer Tailwind CSS'i kullanmak istiyorsanız, Tailwind CSS'i projenize eklemeniz gerekiyor.
// Tailwind CSS'i eklemek için terminalde şu komutu çalıştırabilirsiniz:
// npm install -D tailwindcss postcss autoprefixer
// Ardından Tailwind CSS'i yapılandırmak için şu komutu çalıştırın:
// npx tailwindcss init -p
// Bu, projenizde tailwind.config.js ve postcss.config.js dosyalarını oluşturacaktır.
// Son olarak, Tailwind CSS'i projenize dahil etmek için src/index.css dosyasına şu satırları ekleyin:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// Bu adımları tamamladıktan sonra Tailwind CSS'i kullanmaya başlayabilirsiniz.
//import './index.css' // Tailwind CSS'i dahil etmek için gerekli






function App() {
  //localstorage den tema okuyoruz yoksa ligth kullanıyoruz
  const [theme, setTheme]= useState(()=> {
    return localStorage.getItem('theme') || 'light';
  });

  // tema değiştiriğinde localstorage'a kaydediyoruz
  useEffect(()=>{
    localStorage.setItem('theme', theme);
  }, [theme]);
// ikinci paremetre olan theme  useeffectin sadece tema değişikliğinde çalışmasını sağlıyor 


  //butona basıldığında temayı değiştiricez 
  const toggleTheme = () => {
    setTheme((prevTheme)=> (prevTheme === 'light' ? 'dark' : 'light'
    ));
  };

  return(
    <div className={`App ${theme}`}>
      <h1> {theme === "light" ? "Açık tema" : "Karanlık tema"}</h1>
      <button onClick={toggleTheme}> Temayı değiştir</button>
      <p>
        {theme=== "light" ? "Açık tema seçildi" : "Karanlık tema seçildi"}
      </p>
      </div>
  );

}

export default App;