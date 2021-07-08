SELECT  f . nome , f . sobrenome , f . email  FROM funcionarios f

SELECT  f . nome , f . sobrenome , f . email  FROM funcionarios f ONDE   f . carga  COMO  ' Vendas% '

SELECT DISTINCT  f . cargo  FROM funcionarios f

SELECIONE DISTINTO  l . cidade  DAS lojas l

SELECT  f . nome , f . sobrenome , f . e-mail , l . cidade , l . pais , l . telefone 
FROM funcionarios f JOIN lojas l
ON  f . cargo  = ' Presidente '  ONDE  f . codloja  =  l . Codloja 

SELECT  *  FROM produtos p ORDER BY precosugerido DESC  LIMIT  1

SELECIONE  *  DE produtos p ORDEM POR precosugerido LIMITE  1

SELECIONE  *  DE produtos p ORDEM por qtdestoque LIMITE  1

SELECT  *  FROM produtos p ORDER by qtdestoque DESC  LIMIT  1

SELECT  d . quantidadepedida 
DE detalhespedidos d ONDE  d . codproduto  = ( SELECT  p . codproduto  FROM produtos p ORDER BY precosugerido DESC  LIMIT  1 )

SELECT  d . quantidadepedida 
DE detalhespedidos d ONDE  d . codproduto  = ( SELECT  p . codproduto  FROM produtos p ORDER BY precosugerido LIMIT  1 )

SELECT  d . quantidadepedida 
DE detalhespedidos d ONDE  d . codproduto  = ( SELECT  p . codproduto  FROM produtos p ORDER by qtdestoque LIMIT  1 )

SELECT  d . quantidadepedida 
DE detalhespedidos d ONDE  d . codproduto  = ( SELECT  p . codproduto  FROM produtos p ORDER by qtdestoque DESC  LIMIT  1 )

SELECIONE  c . nomecliente , c . nomecontato , c . sobrenomecontato , c . cidade , c . estado , COUNT ( p . numpedido )
FROM clientes c PARTICIPAR pedidos p
ON  c . numcliente  =  p . numcliente 
GRUPO POR  c . nomecliente , c . nomecontato , c . sobrenomecontato , c . cidade , c . estado

SELECT  p . descricaoproduto , p . linhaproduto , p . precosugerido , COUNT ( d . codproduto )
FROM produtos p JOIN detalhespedidos d
ON  d . codproduto  =  p . codproduto 
GROUP BY  p . descricaoproduto , p . linhaproduto , p . precosugerido