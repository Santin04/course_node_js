//exportando a função que foi criado no outro arquivo
import soma from './aula04-1.mjs';

//utilziando a função soma do outro arquivo
soma(10, 20)
soma(5.5, 5.5)

//OBS: quando for fazer assim, lembrar de colocar .mjs no final do arquivo que importa e que exporta
//ou então você pode colocar no package.json "type" : "modules", só que ai você não vai mais conseguir
//usar o require no seu projeto