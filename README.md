# Kaizenwear Project

**Status:** Projeto descontinuado / Open Source  
**Tipo:** Projeto Freelancer (MVP entregue)  
**Stack:** Django · Bootstrap · HTML/CSS · JavaScript  

---

### Sobre o Projeto

Este projeto foi originalmente desenvolvido como um **freelancer de e-commerce** para a loja *Kaizenwear*, utilizando **Django como backend** e **Bootstrap no frontend**. Após a descontinuidade do projeto por parte do cliente, o código foi liberado para **portfólio open source**.

> **Atenção:** Este repositório foi migrado da minha conta antiga [@Theus-Alves](https://github.com/Theus-Alves), da qual perdi acesso após problemas com 2FA. O projeto é de minha autoria e está sendo mantido aqui para fins de portfólio.

---

### Funcionalidades Implementadas

- Tema **moderno e minimalista**, com **modo claro/escuro**.
- **Carrinho de compras dinâmico** com adição/remoção de itens.
- Sistema completo de **cadastro de clientes e produtos**.
- Área administrativa (**painel admin Django**) para:
  - Registro de novos produtos
  - Gerenciamento de usuários/clientes
- Checkout funcional:
  - Formulário com **endereços e dados pessoais**
  - Pedido registrado no banco de dados após finalização
- Interface desktop funcional (responsividade foi deixada de lado por escolha do cliente na época).

---

### Observações

- **Pagamento online não implementado**: por questões de segurança e responsabilidade, o sistema de pagamento foi deixado para desenvolvedores com mais experiência em segurança web.
- O cliente optou por pausar o projeto após a entrega do MVP.  
- Este projeto não recebeu atualizações após sua entrega.

---

### Prints do Projeto (em breve)

> Caso queira visualizar o projeto localmente, basta seguir os passos abaixo.

---

### Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/teoalvesp/Kaizenwear-Project.git
   cd Kaizenwear-Project

2. Crie e ative um ambiente virtual:

python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows


3. Instale as dependências:

pip install -r requirements.txt


4. Execute as migrações e inicie o servidor:

python manage.py migrate
python manage.py runserver

---

Licença

Este projeto está disponível sob a licença MIT. Sinta-se à vontade para utilizar como referência.


---

Feito por Matheus Alves ©
