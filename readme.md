# 🚀 Microservice `cards-update-service`

## 📌 Description
This microservice allows **updating cards** in a task management system.
It follows the **DRY principle** for reusable update logic and provides a REST API for modifying card details.

## 🛠️ Technologies
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Sequelize (ORM)
- Docker

## 📂 Project Structure
```
cards-update-service/
│── src/
│   ├── controllers/
│   │   ├── updateController.js
│   ├── models/
│   │   ├── Card.js
│   ├── routes/
│   │   ├── updateRoutes.js
│   ├── services/
│   │   ├── updateService.js ✅ (Business logic for updating cards)
│   ├── config/
│   │   ├── database.js
│   ├── utils/
│   │   ├── validators.js ✅ (Reusable validation functions)
│   ├── app.js
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker:
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Update a Card**
```sh
curl -X PUT http://localhost:5013/cards -H "Content-Type: application/json" -d '{
  "card_id": 1,
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}'
```

### **2️⃣ Response Example**
```json
{
  "message": "Card updated successfully",
  "card": {
    "id": 1,
    "title": "Updated Task Title",
    "description": "Updated Task Description"
  }
}
```

## 📄 License
This project is licensed under the MIT License.

