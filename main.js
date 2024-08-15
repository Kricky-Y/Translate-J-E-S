'use strict'; 
{
  document.querySelector('#btn_eng').addEventListener('click', () => {
    document.querySelector('#target').textContent = 'Good Bye';
    document.querySelector('#btn_eng').disabled = true;
    document.querySelector('#btn_jp').disabled = false;
    document.querySelector('#btn_spn').disabled = false;
  });
  document.querySelector('#btn_spn').addEventListener('click', () => {
    document.querySelector('#target').textContent = 'Adios';
    document.querySelector('#btn_eng').disabled = false;
    document.querySelector('#btn_jp').disabled = false;
    document.querySelector('#btn_spn').disabled = true;
  });
  document.querySelector('#btn_jp').addEventListener('click', () => {
    document.querySelector('#target').textContent = 'さようなら';
    document.querySelector('#btn_eng').disabled = false;
    document.querySelector('#btn_jp').disabled = true;
    document.querySelector('#btn_spn').disabled = false;
  });
}