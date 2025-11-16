export const templates = {
    home: `
        <header>
            <h1>Transform Lifes</h1>
            <nav>
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#cadastro">Cadastro</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <h2>Bem-vindo ao projeto!</h2>
            <p>Conteúdo da página inicial.</p>
        </main>
    `,

    projetos: `
        <h2>Nossos Projetos</h2>
        <p>Aqui ficam os projetos da ONG.</p>
    `,

    cadastro: `
        <h2>Formulário de Cadastro</h2>

        <form id="formCadastro">
            <label>Nome:</label>
            <input type="text" id="nome">

            <label>Email:</label>
            <input type="email" id="email">

            <button type="submit">Enviar</button>
        </form>

        <p id="msgErro" style="color: red;"></p>
    `
};
