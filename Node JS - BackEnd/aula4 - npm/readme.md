NPM INSTALL EXPRESS -E = instala ultima versão mas não atualiza automaticamente
NPM UPGRADE = atualiza versão de tudo que ta instalado no node
NPM INSTALL --SAVE-DEV = salva no devDependencies (dev)
NPM INSTALL --SAVE-PROD = salva em Dependencies (produção) 
NPM INSTALL EXPRESS@2.1.0 -E = para instalar a versão específica
NPM UNINSTALL EXPRESS = desinstala qualquer versão
NPM LS = mostra no terminal as dependencias do projeto (obs um webpack contém várias dependências)
NPM OUTDATED = mostra extensões instaladas, versões e qual versão é requerida (wanted)

^ = atualiza minor e patch da versão (exemplo: ^4.1.0)
~ = atualiza somente o patch da versão (exemplo: ~4.1.0)



VERSIONAMENTO
2.1.0

2 = major: gera incompatibilidade com versões antigas, por tanto, gera novo build
1 = minor: atualização que não impacta na instalação
0 = patch: somente correção de bug sobe 1