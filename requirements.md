# 🍔 Online Food Delivery – Microservices Architecture

## 📘 Problem Statement

Wrap the **Online Food Delivery** dataset with **microservices** (minimum four) using **database-per-service** and **no shared tables**.  
If a table’s fields are needed by more than one service, design for **decoupling** (replicated read models / API composition).  
Cross-DB joins are **disallowed**.

### 🧩 Provided Base Tables

| Table | Columns |
|-------|----------|
| Customers | `customer_id`, `name`, `email`, `phone`, `created_at` |
| Addresses | `address_id`, `customer_id`, `line1`, `area`, `city`, `pincode`, `created_at` |
| Restaurants | `restaurant_id`, `name`, `cuisine`, `city`, `rating`, `is_open`, `created_at` |
| Menu_Items | `item_id`, `restaurant_id`, `name`, `category`, `price`, `is_available` |
| Orders | `order_id`, `customer_id`, `restaurant_id`, `address_id`, `order_status`, `order_total`, `payment_status`, `created_at` |
| Order_Items | `order_item_id`, `order_id`, `item_id`, `quantity`, `price` |
| Payments | `payment_id`, `order_id`, `amount`, `method`, `status`, `reference`, `created_at` |
| Drivers | `driver_id`, `name`, `phone`, `vehicle_type`, `is_active` |
| Deliveries | `delivery_id`, `order_id`, `driver_id`, `status`, `assigned_at`, `picked_at`, `delivered_at` |

**Sample size:**  
60 customers · 40 restaurants · ~3500 menu/order rows total  
(≈300 orders, 700+ order_items, payments, deliveries)

---

## 🏗️ 1. Microservices-Based Application (6 Marks)

Develop a **Microservices-Based Application (≥5 services)** — each in its own repository.

### ✅ Recommended Services

| Service | Description |
|----------|--------------|
| **Customer Service** | CRUD for customers & addresses |
| **Restaurant & Menu Service** | List restaurants & menu items; check availability & pricing |
| **Order Service** | Create, confirm, cancel orders; handle order views & rules |
| **Payment Service** | Manage charge, capture, refund; ensure idempotency |
| **(Optional)** Delivery Service | Assign drivers & track delivery status |
| **(Optional)** Notification Service | Send email/SMS for order & payment events |

---

### ⚙️ Business Rules

- Reject orders if restaurant is closed or items are unavailable  
- Max **20 items per order**; each line item quantity ≤ **5**  
- Order total = Σ(item_price × qty) + **5% tax** + delivery fee  
- Total must match client-side calculation  
- Payment must reflect actual status (e.g., pending for COD)

---

### ⚙️ Service Constraints & Standards

- **Database-per-service** (no shared tables)  
- Publish **OpenAPI 3.0** specs (versioned under `/v1/...`)  
- List endpoints must support **pagination & filtering**  
- Use a **standard error schema** (`code`, `message`, `correlationId`)  
- Configs via **env vars / ConfigMap / Secrets**  

---

## 🧩 2. Database Design & Pattern (1.5 Marks)

### 🗃️ Suggested Table Mapping

| Service | Tables Owned |
|----------|--------------|
| **Customer DB** | `customers`, `addresses` |
| **Restaurant DB** | `restaurants`, `menu_items` |
| **Order DB** | `orders`, `order_items` (+ projections like restaurant_name, address_city) |
| **Payment DB** | `payments`, `idempotency_keys` |
| **Delivery DB** | `drivers`, `deliveries` |
| **Notification DB (optional)** | `notifications_log` |

### Deliverables

- ERD per service  
- Context map showing ownership and replicated read models  
- CRUD + integrity only within each service DB  
- Seed data (CSV) for local dev — extendable with new entities  

---

### ⚖️ Additional Business Rules

- Orders accepted only if:
  - `is_open = true`
  - All `is_available = true`
- Delivery must be within **same city**
- COD orders: `payment_status = PENDING` until driver collects
- Card/UPI/Wallet orders: `SUCCESS` or `FAILED`

---

## 🔗 3. Inter-Service Communication (2.5 Marks)

Primary mode: **Synchronous REST (or gRPC)**

### 🧾 Example: Place Order Workflow

1. Client calls **Order Service** `/v1/orders` with `Idempotency-Key`
2. Order Service validates restaurant & menu via **Restaurant Service**
3. Order Service calculates totals → calls **Payment Service** `/v1/payments/charge`
4. If successful → moves to **CONFIRMED**, triggers **Delivery Service**
5. **Notification Service** sends customer updates (sync or async)

#### Optional Async Events
- `OrderConfirmed`
- `PaymentSucceeded`

Document use of **Outbox Pattern** if using message broker.

#### Reliability Patterns
- Timeouts & bounded retries (with jitter)
- Idempotency for all write endpoints (`/orders`, `/payments/charge`)

---

## 🐳 4. Containerization with Docker (2 Marks)

- **Dockerfile** per service  
- **docker-compose.yml** to boot all services + databases  

### Demo Evidence
- `docker ps`
- Health endpoints
- Sample API requests via Postman or curl

---

## ☸️ 5. Deployment on Minikube (2 Marks)

### Kubernetes Manifests per Service

| Resource | Description |
|-----------|--------------|
| **Deployment** | With readiness/liveness probes & resource limits |
| **Service** | ClusterIP (internal) or NodePort/Ingress (public) |
| **ConfigMap / Secret** | For DB & API credentials |
| **PersistentVolumeClaim** | For service databases |

### Cluster Demo Flow
1. Create customer  
2. Place order (validate items/prices)  
3. Pay for order  
4. Assign driver  
5. View notifications/logs

### Required Evidence
- `kubectl get pods,svc`
- `kubectl logs`
- API calls via NodePort/Ingress

---

## 📊 6. Monitoring & Observability (2 Marks)

### Metrics (Golden Signals)
- **RED/USE Metrics**:
  - Request **Rate**, **Errors**, **Duration (p50/p90/p99)**
- **Business Metrics**:
  - `orders_placed_total`
  - `payments_failed_total`
  - `delivery_assignment_latency_ms`

### Logging
- Structured **JSON logs**
- Include `correlationId` / `traceId`
- Mask PII (email, phone, address)
- Track path, latency, and status

### Dashboard
Provide screenshots for:
- Latency  
- Error rate  
- Request per second (RPS)  
- A trace view for one complete request

---

## 🧾 7. Documentation (2 Marks)

---