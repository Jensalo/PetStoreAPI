# Automatización de Pruebas API - Swagger Petstore

## Descripción del Proyecto

Este proyecto implementa pruebas automatizadas para la API de Swagger Petstore utilizando **Karate Framework** con Java. El proyecto incluye un escenario completo que realiza operaciones CRUD (Crear, Leer, Actualizar y Verificar) sobre la entidad "mascota".

## Tecnologías Utilizadas

- **Java 21**: Lenguaje de programación principal
- **Maven 3.9+**: Gestión de dependencias y construcción del proyecto
- **Karate Framework 1.4.1**: Framework de automatización de pruebas de API
- **JUnit 5**: Framework de testing integrado con Karate
- **Swagger Petstore API**: API de pruebas disponible públicamente

## Estructura del Proyecto

```
Ejercicio2_Sofka/
├── src/
│   └── test/
│       └── java/
│           ├── karate-config.js                    # Configuración de Karate
│           └── runners/
│               ├── AgregarMascotaTest.java         # Runner de JUnit + Karate
│               └── features/
│                   └── karate/
│                       └── agregar-mascota.feature # Escenario de prueba
├── target/                                         # Archivos generados
│   ├── karate-reports/                            # Reportes HTML de Karate
│   └── surefire-reports/                         # Reportes de Maven
├── pom.xml                                        # Configuración de Maven
├── README.md                                      # Este archivo
├── conclusiones.txt                               # Hallazgos del ejercicio
└── .gitignore                                     # Archivos a ignorar en Git
```

## Requisitos Previos

### Software Necesario:

1. **Java JDK 21** o superior

   - Verificar: `java -version`
   - Descargar desde: https://www.oracle.com/java/technologies/downloads/

2. **Apache Maven 3.6+**

   - Verificar: `mvn -version`
   - Descargar desde: https://maven.apache.org/download.cgi

3. **Git** (opcional, para clonar el repositorio)
   - Verificar: `git --version`

### Conectividad:

- Conexión a internet para acceder a la API de Swagger Petstore
- Acceso al repositorio Maven Central para descargar dependencias

## Instrucciones de Instalación

### Paso 1: Clonar o Descargar el Proyecto

```bash
# Opción A: Clonar repositorio (si está en Git)
git clone https://github.com/Jensalo/PetStoreAPI.git
cd Ejercicio2_Sofka

# Opción B: Descargar ZIP y extraer
# Navegar al directorio extraído
```

### Paso 2: Verificar Configuración de Java y Maven

```bash
# Verificar Java
java -version
# Debe mostrar: java version "21.x.x" o superior

# Verificar Maven
mvn -version
# Debe mostrar: Apache Maven 3.x.x
```

### Paso 3: Instalar Dependencias

```bash
# Navegar al directorio del proyecto
cd c:\Repos\Ejercicio2_Sofka

# Limpiar y compilar el proyecto
mvn clean compile

# Compilar las clases de test
mvn test-compile
```

## Ejecución de Pruebas

### Ejecutar Todas las Pruebas

```bash
mvn test
```

### Ejecutar Prueba Específica

```bash
mvn test -Dtest=AgregarMascotaTest
```

### Ejecutar con Información Detallada

```bash
mvn test -Dtest=AgregarMascotaTest -X
```

## Visualización de Reportes

### Reportes de Karate (HTML)

Después de ejecutar las pruebas, abrir en el navegador:

```
target/karate-reports/karate-summary.html
```

### Reportes de Maven (Texto)

```bash
# Ver resultado resumido
type target\surefire-reports\runners.AgregarMascotaTest.txt

# En Linux/Mac
cat target/surefire-reports/runners.AgregarMascotaTest.txt
```

## Descripción del Escenario de Prueba

### Operaciones Implementadas:

1. **CREATE (POST)**: Crear nueva mascota

   - Endpoint: `POST /pet`
   - Datos: Nombre "Bobby", estado "available"
   - Validación: Respuesta 200, ID generado

2. **READ (GET)**: Consultar mascota por ID

   - Endpoint: `GET /pet/{id}`
   - Validación: Datos coinciden con los creados

3. **UPDATE (PUT)**: Actualizar mascota

   - Endpoint: `PUT /pet`
   - Cambios: Nombre → "Bobby Actualizado", estado → "sold"
   - Validación: Respuesta 200, datos actualizados

4. **VERIFY (GET por status)**: Verificar por lista
   - Endpoint: `GET /pet/findByStatus?status=sold`
   - Validación: Mascota aparece en la lista de vendidas

### Validaciones Incluidas:

- Códigos de respuesta HTTP correctos
- Estructura de datos de respuesta
- Persistencia de datos entre operaciones
- Integridad de la información actualizada

## Resolución de Problemas

### Error: "java: command not found"

```bash
# Verificar instalación de Java
echo $JAVA_HOME
# Configurar JAVA_HOME si es necesario
```

### Error: "mvn: command not found"

```bash
# Verificar instalación de Maven
echo $M2_HOME
# Agregar Maven al PATH si es necesario
```

### Error de Conectividad

```bash
# Verificar conectividad a la API
curl https://petstore.swagger.io/v2/pet/1
# Debe retornar datos JSON
```

### Error: "Tests run: 0"

```bash
# Limpiar y recompilar
mvn clean compile test-compile
mvn test -Dtest=AgregarMascotaTest
```

## Extensiones Futuras

### Posibles Mejoras:

- Agregar más operaciones CRUD (DELETE)
- Implementar pruebas de casos negativos
- Agregar validaciones de esquemas JSON
- Implementar pruebas de rendimiento
- Agregar manejo de datos de prueba dinámicos

### Escalabilidad:

- Parametrización de URLs y datos
- Configuración por ambientes (dev, test, prod)
- Integración con CI/CD pipelines
- Reportes personalizados

## Soporte

Para problemas o preguntas:

1. Revisar la sección de resolución de problemas
2. Verificar logs en `target/karate-reports/`
3. Consultar documentación de Karate: https://github.com/karatelabs/karate

---
