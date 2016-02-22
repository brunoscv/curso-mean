# Curso de MEAN - Novatec

[@wbruno](@wbruno)
[@rafaell-lycan](@rafaell-lycan)


## Seed

* [jobs](./seed/jobs.json)
* [companies](./seed/companies.json)
```
mongoimport --host 127.0.0.1 --drop --db curso-mean --collection jobs --file server/seed/jobs.json
mongoimport --host 127.0.0.1 --drop --db curso-mean --collection companies --file server/seed/companies.json
```
