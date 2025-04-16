

        document.getElementById('cep').addEventListener('blur', buscarEndereco);

        function buscarEndereco() {
          const cep = document.getElementById('cep').value.replace(/\D/g, '');
        
          if (cep.length !== 8) return alert('CEP inválido!');
        
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(dados => {
              if (dados.erro) return alert('CEP não encontrado.');
        
              document.getElementById('logradouro').value = dados.logradouro || '';
              document.getElementById('bairro').value = dados.bairro || '';
              document.getElementById('complemento').value = dados.complemento || '';
            })
            .catch(() => alert('Erro ao buscar o CEP'));
        }
        