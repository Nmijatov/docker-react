# Docker React Todo App

Moderna i funkcionalna Todo aplikacija izgrađena sa React-om i pokrenuta u Docker kontejneru.

## O projektu

Ova aplikacija demonstrira:
- React funkcionalnosti (useState, komponente, eventi)
- Docker containerizaciju React aplikacije
- Moderni UI dizajn sa gradient pozadinom
- Responzivan dizajn za mobilne uređaje
- CI/CD sa Travis CI i Azure Pipelines

## Funkcionalnosti

- ✅ Dodavanje novih zadataka
- ✅ Označavanje zadataka kao završenih
- ✅ Brisanje zadataka
- ✅ Brojanje aktivnih i ukupnih zadataka
- ✅ Moderni, responzivan dizajn
- ✅ Animacije i hover efekti

## Docker komande

### Development režim sa Docker Compose

```bash
docker-compose up
```

Aplikacija će biti dostupna na [http://localhost:3000](http://localhost:3000)

### Build production Docker image

```bash
docker build -t docker-react .
```

### Pokretanje production kontejnera

```bash
docker run -p 8080:80 docker-react
```

Aplikacija će biti dostupna na [http://localhost:8080](http://localhost:8080)

### Development build (za razvoj)

```bash
docker build -f Dockerfile.dev -t docker-react-dev .
docker run -p 3000:3000 -v $(pwd):/app docker-react-dev
```

## Lokalni development (bez Docker-a)

### Instalacija

```bash
npm install
```

### Pokretanje development servera

```bash
npm start
```

Otvara aplikaciju na [http://localhost:3000](http://localhost:3000)

### Pokretanje testova

```bash
npm test
```

### Production build

```bash
npm run build
```

## Struktura projekta

```
docker-react/
├── src/
│   ├── App.js          # Glavna Todo komponenta
│   ├── App.css         # Stilovi za aplikaciju
│   └── index.js        # Entry point
├── public/             # Statički fajlovi
├── Dockerfile          # Production Docker konfiguracija
├── Dockerfile.dev      # Development Docker konfiguracija
├── docker-compose.yml  # Docker Compose setup
├── .travis.yml         # Travis CI konfiguracija
└── azure-pipelines.yml # Azure Pipelines konfiguracija

```

## Tehnologije

- **React 17** - Frontend framework
- **Docker** - Containerizacija
- **Nginx** - Production web server
- **Travis CI** - Continuous Integration
- **Azure Pipelines** - CI/CD

## CI/CD

Projekat ima automatizovan CI/CD pipeline sa:
- Travis CI za build i deployment
- Azure Pipelines za integraciju

## License

Ovaj projekat je otvoren za korišćenje i modifikaciju.
