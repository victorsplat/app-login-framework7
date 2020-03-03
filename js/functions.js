//Dom7 Manipulations
$$("#btn-login").click(() => {
    const user = $$("#username").val();
    const pass = $$("#password").val();
    requestApi(
        "http://aluno.etecarmine.com.br/2DS/Victor/usuarios-login.php",
        checkUser, [user, pass]
    );
});

//Functions

//Login Verification

const requestApi = (url, callback, dataArray) => {
    app.request.json(url, data => {
        callback(data, dataArray);
    });
};
const checkUser = (data, credentials) => {
    const user = credentials[0];
    const pass = credentials[1];
    let result = false;
    console.log("Encontrei: " + data.length + " registros!");
    for (linha = 0; linha < data.length; linha++) {
        if (user === data[linha].usuario_nome) {
            if (pass === data[linha].usuario_senha) {
                console.log("Usuário Encontrado no Banco");
                $$(".login-result").html("Usuário Logado!");
                result = true;
                break;
            }
        }
    }
    if (result === false) {
        $$(".login-result").html("Usuário Não Encontrado!");
    }
};