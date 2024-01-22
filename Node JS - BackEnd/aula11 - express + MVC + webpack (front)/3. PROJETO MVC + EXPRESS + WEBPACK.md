COMO FAZER O NODEMON IGNORAR PASTAS?

no package.json:
"scripts": {
    "start": nodemon server.js --ignore public
}

COMO RESOLVER VULNERABILILDADES DO NODE?
~npm audit fix