# 🌐 API Design — Online Food Delivery System

This document describes the RESTful API design for all core microservices in the **Online Food Delivery** system.  
All APIs follow **REST conventions**, **OpenAPI 3.0** structure, and **consistent naming patterns**.

---

## 🔑 Common Standards

| **Aspect** | **Description** |
|-------------|-----------------|
| **Base URL Convention** | `/v1/<resource>` |
| **HTTP Methods** | Follow CRUD semantics (POST, GET, PUT, PATCH, DELETE) |
| **Authentication** | JWT or API Key-based (service-specific) |
| **Headers** | `Content-Type: application/json`<br>`Idempotency-Key` (required for Payment APIs) |
| **Response Format** | ```json<br>{<br>  "success": true,<br>  "data": {},<br>  "message": "Optional message"<br>}``` |

---

## 🧩 1️⃣ Customer Service  
**Purpose:** Handles customer and address management.  

**Base URL:** `/v1/customers`

### 📘 Endpoints

| **Method** | **Endpoint** | **Description** |
|-------------|--------------|-----------------|
| `POST` | `/` | Create a new customer |
| `GET` | `/` | Get all customers |
| `GET` | `/{customer_id}` | Get a customer by ID |
| `PUT` | `/{customer_id}` | Update customer details |
| `DELETE` | `/{customer_id}` | Delete a customer |

### 🏠 Addresses

| **Method** | **Endpoint** | **Description** |
|-------------|--------------|-----------------|
| `POST` | `/{customer_id}/addresses` | Add a new address for a customer |
| `GET` | `/{customer_id}/addresses` | Get all addresses of a customer |
| `PUT` | `/{customer_id}/addresses/{address_id}` | Update customer address |
| `DELETE` | `/{customer_id}/addresses/{address_id}` | Delete a customer address |

---

## 🍽️ 2️⃣ Restaurant & Menu Service  
**Purpose:** Manages restaurant data, menu items, and availability.  

**Base URL:** `/v1/restaurants`

| **Method** | **Endpoint** | **Description** |
|-------------|--------------|-----------------|
| `GET` | `/` | List all restaurants |
| `GET` | `/{restaurant_id}` | Get restaurant details |
| `GET` | `/{restaurant_id}/menu` | Get menu items for a restaurant |
| `GET` | `/{restaurant_id}/menu/{item_id}` | Get specific menu item details |
| `PATCH` | `/{restaurant_id}/menu/{item_id}/availability` | Update availability of a menu item |

---

## 🧾 3️⃣ Order Service  
**Purpose:** Manages order lifecycle and enforces business rules.  

**Base URL:** `/v1/orders`

| **Method** | **Endpoint** | **Description** |
|-------------|--------------|-----------------|
| `POST` | `/` | Create a new order (validate restaurant open, item availability, item count ≤ 20, qty ≤ 5) |
| `GET` | `/` | List all orders |
| `GET` | `/{order_id}` | Get order details |
| `PATCH` | `/{order_id}/confirm` | Confirm an order |
| `PATCH` | `/{order_id}/cancel` | Cancel an order |
| `GET` | `/customers/{customer_id}/summary` | Get all orders for a specific customer (statement view) |

---

## 💳 4️⃣ Payment Service  
**Purpose:** Handles payment operations and ensures idempotency.  

**Base URL:** `/v1/payments`

| **Method** | **Endpoint** | **Description** |
|-------------|--------------|-----------------|
| `POST` | `/charge` | Create (charge) a payment — requires `Idempotency-Key` header |
| `GET` | `/{payment_id}` | Get payment status/details |
| `PATCH` | `/{payment_id}/capture` | Capture a pending payment |
| `PATCH` | `/{payment_id}/cancel` | Cancel a payment (if not captured yet) |

---

## ⚙️ Best Practices Followed

- ✅ RESTful, resource-based endpoint naming  
- ✅ Versioned APIs (`/v1/`) for forward compatibility  
- ✅ Consistent HTTP method usage  
- ✅ Validation and business rules applied at service level  
- ✅ Payment safety ensured via **idempotency**  
- ✅ Designed for **OpenAPI 3.0** documentation compatibility  

---

## 🔗 Related Documentation

- [📄 Database Design](./database-design.md)
