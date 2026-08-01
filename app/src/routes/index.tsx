import React from 'react';

export default function Home() {
  return (
    <div style={{ 
      background: '#1A1A1A', 
      color: '#FFFFFF', 
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ padding: '60px 48px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '56px', fontFamily: 'Lora, serif', marginBottom: '24px', fontWeight: 700 }}>TŘÍDA SVOBODY 22</h1>
        <p style={{ fontSize: '18px', maxWidth: '600px', marginBottom: '48px', color: '#CCCCCC' }}>Historický činžovní dům v centru Olomouce. Byt 4+1 (127 m²), sklepy k pronájmu. Dlouhodobý pronájem.</p>
      </div>
      
      <div style={{ padding: '60px 48px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '40px', fontFamily: 'Lora, serif', marginBottom: '24px' }}>VSTUP DO DOMU</h2>
        <p style={{ fontSize: '18px', marginBottom: '32px' }}>Elegantní foyer s historickým nádechem</p>
        <img src="/images/foyer.jpg" alt="foyer" style={{ maxWidth: '600px', height: 'auto', marginTop: '20px', borderRadius: '8px' }} />
      </div>
      
      <div style={{ padding: '60px 48px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '40px', fontFamily: 'Lora, serif', marginBottom: '24px' }}>BYT 4+1</h2>
        <p style={{ fontSize: '18px', marginBottom: '8px' }}>127 m² | 24 000 Kč/měsíc + energie</p>
        <p style={{ fontSize: '18px', marginBottom: '32px' }}>Prostorný a elegantní byt s moderním komfortem</p>
        <img src="/images/apartment.jpg" alt="apartment" style={{ maxWidth: '600px', height: 'auto', marginTop: '20px', borderRadius: '8px' }} />
      </div>
      
      <div style={{ padding: '60px 48px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '40px', fontFamily: 'Lora, serif', marginBottom: '24px' }}>SKLEPY K PRONÁJMU</h2>
        <p style={{ fontSize: '18px', marginBottom: '32px' }}>Historická architektura, bezpečné prostory</p>
        <img src="/images/cellar.jpg" alt="cellar" style={{ maxWidth: '600px', height: 'auto', marginTop: '20px', borderRadius: '8px' }} />
      </div>
      
      <div style={{ padding: '60px 48px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#2A2A2A' }}>
        <h2 style={{ fontSize: '40px', fontFamily: 'Lora, serif', marginBottom: '32px' }}>KONTAKTUJ NÁS</h2>
        <p style={{ fontSize: '18px', marginBottom: '16px' }}><strong>Telefon:</strong> +420 732 613 208</p>
        <p style={{ fontSize: '18px', marginBottom: '16px' }}><strong>Email:</strong> jiri.n@outlook.com</p>
        <p style={{ fontSize: '18px' }}><strong>Adresa:</strong> Třída Svobody 22, Olomouc</p>
      </div>
    </div>
  );
}
