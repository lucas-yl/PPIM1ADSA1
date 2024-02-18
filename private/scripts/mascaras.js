function mMoeda () {
  // Para pegar o objeto que chamou o evento 
  //var v = (event.target.value).substring(3); //extrai os 3 primeiros caracteres relativos ao 'R$ '
  var v = event.target.value;
           
  //Faz uma série de substituições nas Expressões Regulares que podem gerar valores monetários
  v = v.replace(/\D/g, "");
  v = v.replace(/^0+/g, "");
  v = v.replace(/(\d{1})(\d{13})$/, "$1.$2");
  v = v.replace(/(\d{1})(\d{10})$/, "$1.$2");
  v = v.replace(/(\d{1})(\d{7})$/, "$1.$2");
  v = v.replace(/(\d{1})(\d{4})$/, "$1.$2");
  v = v.replace(/(\d{1})(\d{1,1})$/, "$1,$2");
  // Para retornar os valores que estão sendo digitados com a formatação ao elemento que chamou a função
  //event.target.value = "R$ " + v;
  event.target.value = v;
}

function mCpf() {
   var cpf = event.target.value;
   cpf = cpf.replace(/\D/g, "")
   cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
   cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
   cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
   event.target.value = cpf;
}

function mTel () {
   var tel = event.target.value;
   tel = tel.replace(/\D/g, "")
   tel = tel.replace(/^(\d)/, "($1")
   tel = tel.replace(/(.{3})(\d)/, "$1)$2")
   if (tel.length == 9) {
      tel = tel.replace(/(.{1})$/, "-$1")
   } else if (tel.length == 10) {
      tel = tel.replace(/(.{2})$/, "-$1")
   } else if (tel.length == 11) {
      tel = tel.replace(/(.{3})$/, "-$1")
   } else if (tel.length == 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
   } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, "-$1")
   }
   event.target.value = tel;
}
        

function mCEP () {
   var cep = event.target.value;
   cep = cep.replace(/\D/g, "")
   cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
   cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
   event.target.value = cep;
}

// Validar CPF - Andressa

function validarCPF() {
   var cpf = event.target.value;
   var ok = 1;
   var add;
   if (cpf != "") {
      cpf = cpf.replace(/[^\d]+/g, '');
      if (cpf.length != 11 ||
         cpf == "00000000000" ||
         cpf == "11111111111" ||
         cpf == "22222222222" ||
         cpf == "33333333333" ||
         cpf == "44444444444" ||
         cpf == "55555555555" ||
         cpf == "66666666666" ||
         cpf == "77777777777" ||
         cpf == "88888888888" ||
         cpf == "99999999999")
             ok = 0;
      if (ok == 1) {
         add = 0;
         for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
               rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
               ok = 0;
            if (ok == 1) {
               add = 0;
               for (i = 0; i < 10; i++)
                  add += parseInt(cpf.charAt(i)) * (11 - i);
               rev = 11 - (add % 11);
               if (rev == 10 || rev == 11)
                  rev = 0;
               if (rev != parseInt(cpf.charAt(10)))
                  ok = 0;
            }
        }
        if (ok == 0) {
           alert("Ops... Ocorreu um problema... CPF inválido!");
           event.target.focus();
        }
    }
}

function validarNome( ) {
   var nome = event.target.value;
   if (nome.length < 5)
   alert("Nome do cantor ou banda deve conter no mínimo 5 caracteres!")
   event.target.focus();
}

function checarCampos ( ) {
   var nome1 = document.getElementById("nome").value;
   var iCPF1 = document.getElementById("iCPF").value;
   var telefone1 = document.getElementById("telefone").value;
   var url1 = document.getElementById("url").value;
   if (nome1.length < 5) {
      alert("Complete o campo nome.")
   }
   if (iCPF1.length < 13) {
      alert("Complete o campo CPF.")
   }
   if (telefone1.length < 13) {
      alert("Complete o campo telefone/celular.")
   }
   if (url1.length < 4) {
      alert("Complete o campo material divulgação (URL).")
   }
   if ((nome1.length > 4) && (iCPF1.length > 13) && (telefone1.length > 11) && (url1.length > 4)) {
   alert("Dados salvos com sucesso!")
   }
}

function checarCamposcartao ( ) {
   var nome2 = document.getElementById("nomecartao").value;
   var cartao2 = document.getElementById("cartao").value;
   var cvv2 = document.getElementById("cvv").value;
   if (nome2.length < 5) {
      alert("Complete o campo nome.")
   }
   if (cartao2.length < 16) {
      alert("Complete o campo número do cartão.")
   }
   if (cvv2.length < 3) {
      alert("Complete o campo CVV.")
   }
   if ((nome2.length > 4) && (cartao2.length > 16) && (cvv2.length == 3)) {
   alert("Ops... Infelizmente ainda não começamos o processo de venda on-line!")
   }
}