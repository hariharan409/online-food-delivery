# 🗄️ Database Design

The database schemas for each microservice in the **Online Food Delivery** system are designed using [dbdiagram.io](https://dbdiagram.io/).  
Each microservice owns its database independently, following **Domain-Driven Design (DDD)** and **microservice isolation** principles.

---

## 📁 Database Schemas by Service

| **Service** | **Purpose** | **DB Diagram Link** |
|--------------|--------------|----------------------|
| 🧍‍♂️ **Customer Service** | Manages customer registration, authentication, and profile data. | [View Schema →](https://dbdiagram.io/d/Customer-Service-DB-6909f0c06735e111702c138a) |
| 🍽️ **Restaurant & Menu Service** | Handles restaurant data, menus, categories, and dishes. | [View Schema →](https://dbdiagram.io/d/Restaurant-and-Menu-Service-DB-6909f51f6735e111702ce95f) |
| 📦 **Order Service** | Manages customer orders, order items, and order statuses. | [View Schema →](https://dbdiagram.io/d/Order-Service-DB-6909f68b6735e111702d2bbd) |
| 💳 **Payment Service** | Responsible for payment intents, transactions, and idempotency tracking. | [View Schema →](https://dbdiagram.io/d/Payment-Service-DB-6909f8166735e111702d78fc) |

---

## 🧠 Design Principles

- **Microservice Isolation** – Each service maintains its own schema and database instance.  
- **Data Ownership** – No direct cross-service queries; all interactions go through service APIs.  
- **Scalability** – Each service can scale independently at the database level.  
- **Maintainability** – Schemas can evolve independently without affecting other services.

---
