// definir os dados iniciais 
const  pessoa  =  {
    nome : 'Betão' ,  sobrenome : 'Einstein' ,  idade : 42 ,  doido : falso ,  imagem_serio : 'https://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png' ,
    imagem_doido : 'https://www.hypeness.com.br/1/2017/08/EinsteinL3.jpg'
}  // Capturar os elementos pelo Id
const  elementoNome  =  documento . getElementById ( "nome" ) ;
const  elementoSobrenome  =  documento . getElementById ( "sobrenome" ) ;
const  elementoIdade  =  documento . getElementById ( "idade" ) ;
const  elementoBotao  =  documento . getElementById ( "alteraHumor" ) ;  // Atribuir os valores iniciais
elementoNome . innerText  =  pessoa . nome ;
elementoSobreNome . innerText  =  pessoa . sobrenome ;
elementoIdade . innerText  =  pessoa . idade ;

// Definição da função de atualização do humor 
function  atualizaHumor ( )  {
    pessoa . doido  =  ! pessoa . doido ;
    const  elementoImagem  =  document . getElementById ( "imagem" ) ;
    const  elementoHumor  =  document . getElementById ( "bloco_humor" ) ;
    if  ( pessoa . doido )  {
        elementoImagem . src  =  pessoa . imagem_doido ;
        elementoHumor . innerHTML  =  pessoa . nome  +  'está <b> DOIDO </b>!' ;
    }  else  {
        elementoImagem . src  =  pessoa . imagem_serio ;
        elementoHumor . innerHTML  =  pessoa . nome  +  'está <b> SÉRIO </b>!' ;
    }
}  atualizaHumor ( ) ;  // Adicionar o EventListener de clique no botão
elementoBotao . addEventListener ( 'click' ,  atualizaHumor ) ;