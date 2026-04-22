# DECISIONS - Backend

## General

Se diseñó el backend siguiendo principios de **separación de responsabilidades** y una arquitectura inspirada en **Clean Architecture** desacoplando por capas toda la logica de negocio, acceso a datos, transformacion de datos y exposicion de los endpoints HTTP

El objetivo fue construir un sistema mantenible, testeable y fácilmente extensible.

---

## Decisiones técnicas principales

### 1. Separación por capas

Se dividio el modulo de videos en:

- **Application** - Orquestación
- **Domain** - Reglas puras
- **Infrastructure** - Lectura del JSON de data
- **DTO** - Contrato de salida

### 2. Uso de Mapper - VideoMapper

Se implementó un mapper explícito en lugar de exponer directamente el modelo crudo.

- Permite evolucionar el contrato sin romper consumidores

---

### 3. Encapsulación de reglas de negocio

#### HypeCalculator

Toda la lógica de hype está aislada:

- Formula base
- Reglas adicionales
- Facil extensión

---

### 4. Manejo de fechas sin librerías

Se implementa DateUtil usando JavaScript nativo.

- Control total
- Cero dependencias externas

---

### 5. Ordenamiento - Application Layer

El servicio:

- Ordena por hype
- Determina la "Joya de la Corona"

```ts
isCrown: index === 0 && video.hype > 0;
```
