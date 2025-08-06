# 🚀 express-ts-kit

A powerful and easy-to-use CLI tool to generate production-ready Node.js boilerplates using **Express**, **TypeScript**, **Redis**, and **Socket.IO**.

---

## ✨ Features

- 📁 Clean, scalable folder structure
- ⚙️ TypeScript + Express preconfigured
- 🔌 Redis & Socket.IO optional integrations
- 🧱 Built-in BullMQ job queue support
- 🔒 JWT Authentication middleware via Passport.js
- 🧪 Test-ready setup (unit/integration)
- 🔥 Developer-friendly DX with sensible defaults

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g express-ts-kit
```

---

## 🚀 Usage

Create a new project using the CLI:

```bash
express-ts-kit
```

You'll be prompted to enter:

- Project Name  
- Port  
- Redis Usage (y/N)  
- Socket.IO Usage (y/N)  

**Example:**

```bash
? Project name: my-api
? Use Redis? (y/N): y
? Use Socket.IO? (y/N): n
```

Then navigate to your project and start coding:

```bash
cd my-api
npm install
npm run dev
```

---

## 📂 Folder Structure

```
my-app/
├── public/
│   ├── image/
│   └── uploads/
│
├── src/
│   ├── bin/
│   │   └── www.ts                   # Starts the server
│   ├── config/
│   │   ├── config.ts               # Sequelize config
│   │   ├── redis.ts                # Redis setup
│   │   └── bullmq.ts               # BullMQ queue config
│   ├── controllers/
│   │   └── auth/
│   │       ├── authController.ts
│   │       └── authRoute.ts
│   ├── services/
│   │   └── auth.service.ts         # Business logic
│   ├── models/
│   │   ├── index.ts
│   │   ├── init-models.ts
│   │   ├── user.model.ts
│   │   ├── wallet.model.ts
│   │   └── transaction.model.ts
│   ├── passport/
│   │   └── index.ts                # JWT/passport middleware
│   ├── jobs/
│   │   └── processWalletJob.ts     # Background job processor
│   ├── queue/
│   │   └── walletQueue.ts          # Queue definition
│   ├── redis/
│   │   └── session.ts              # Redis session handling
│   ├── migrations/
│   │   └── 20250730044302-create-users.ts
│   ├── utils/
│   │   ├── responseHandler.ts
│   │   ├── hash.ts
│   │   └── logger.ts               # Winston logger
│   ├── socket/
│   │   └── index.ts                # Socket.IO setup
│   ├── types/
│   │   └── request.ts              # Custom types (e.g., req.user)
│   ├── app.ts                      # Main Express app
│   └── migrate.ts                  # Migrations runner
│
├── .env                            # Environment variables
├── tsconfig.json                   # TypeScript config
├── package.json
└── README.md
```

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Sequelize ORM**
- **Redis** (optional)
- **BullMQ** (job queues)
- **Socket.IO** (optional)
- **JWT + Passport.js** (auth)

---

## 🤝 Contributing

Pull requests, issues, and feature suggestions are welcome!

If you like this project, don’t forget to ⭐ the repo and share it with fellow developers.

---

## 📜 License

**MIT License**  
Copyright © [Parvind06](mailto:parvindpaswan06@gmail.com)

Built with ❤️ by **Parvind06**
