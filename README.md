# ifOnlineAPI

<p>fala galera dos codes, aqui nesse repo eu vou colocar uma API para que futuramente a gente possa criar um app para consumi-la, 
por enquanto é só.. hehe.<p>
    
# Organização das pastas

- Models ( Objetos que representam a tabela no banco )
- DAO ( Objetos que fazem o contato direto com o banco )
- Services ( Regras de negócio )
- Controllers ( End points, rotas e comunicação direta com quem está consumindo a API )

# MÉTODOS BÁSICOS DA API

- [x] - BUSCAR DADOS NO BANCO.
- [x] - BUSCAR POR ID DADOS NO BANCO.
- [x] - SALVAR DADOS NO BANCO.
- [x] - EDITAR DADOS NO BANCO.
- [x] - REMOVER DADOS NO BANCO.

# IDEIA DA API
- A ideia aqui é primeiramente ter um local para o aluno poder criar grupos de estudos compartilhados, 

# TDD ( Testes de integração )
- Mocha + Chai + Supertest
- para executar os testes é só rodar:
````
npm run tdd
````
- [x] - STUDENT [ INICIANDO IMPLEMENTAÇÃO DOS TESTES ]
- [x] - STUDY GROUP.
- [x] - TEACHER.
- [x] - USER.

# Notas sobre a versão
- [x] - FAZER A LIGAÇÃO ENTRE USUÁRIO E ESTUDANTE OU PROESSOR.
- [x] - AO CRIAR GRUPO FAZER A LIGAÇÃÇO ENTRE PROFESSOR E GRUPO.
- [x] - ALUNO ENTRA NO GRUPO.
- [x] - ALUNO SAI DO GRUPO.
- [ ] - REFAZER TESTES COM A NOVA MODELAGEM DE USER.
- [ ] - AO BUSCAR TODOS OS GRUPOS POPULAR APENAS O ADMIN.

### Notas teste interação da API
- [ ] - CRIAR USUÁRIO.
- [ ] - LOGAR COM USUÁRIO PROFESSOR.
- [ ] - CRIAR GRUPOS DE ESTUDO.
- [ ] - REMOVER GRUPOS DE ESTUDO.
- [ ] - ADICIONAR PROVAS NO GRUPO. 
- [ ] - LOGAR COM USUÁRIO ESTUDANTE.
- [ ] - ENTRAR EM GRUPO.
- [ ] - SAIR DE GRUPO.



# Rodando a API

Para consegui testar essa API é preciso ter o mongodb instalado na maquina segue um link com um tutorial como instalar o mongodb:

[instalar mongodb - windows](http://www.bosontreinamentos.com.br/nosql/instalando-o-mongodb-no-microsoft-windows/) </br>
[instalar mongodb - linux](https://www.digitalocean.com/community/tutorials/como-instalar-o-mongodb-no-ubuntu-16-04-pt) </br>

depois do mongodb instalado é hora de instalar o Node pra rodar a aplicação:

[instalar node - windows](http://marcosrocha.net/node-js/instalando-o-node-js-no-windows-how-to-node/) </br>
[instalar node VIDEO - windows](https://www.youtube.com/watch?v=brSwmLQA0iA) </br>
[instalar node - linux](https://www.digitalocean.com/community/tutorials/como-instalar-o-node-js-no-ubuntu-16-04-pt) </br>


agora vc vai entrar na pasta ifonlineapi e executar os comandos abaixo:
````
npm install 
npm install -g nodemon
npm run start-dev
````