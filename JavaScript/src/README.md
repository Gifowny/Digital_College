#Fundamentos do JavaScript Clássico

##INTEGRAÇÕES
~~~ javascript
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript
    </title>
</head>
<body>
    
<script defer>
        console.log("Hello, World!");
    </script>
</body>
</html>
~~~

### Integrar JavaScript de forma interna

~~~ javascript
- Criar diretório ***src*** na raiz do projeto
- Criar arquivo ***script.js*** na raiz do diretório ***src***
- Integrar de forma externa o arquivo **script.js** no arquivo **index.html**

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript
    </title>
</head>
<body>
    
<script src="script.js"></script>
        console.log("Hello, World!");
    </script>
</body>
</html>
~~~
