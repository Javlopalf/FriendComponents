### FriendComponents
 






### Uso legal
Puesto que nos encontramos ante un proyecto con fines comerciales, se deberá de pedir permisos a las empresas distribuidoras de dichos productos,
proporcionandonos estas la autorización de uso de las imagenes de sus marcas y productos. Y en determinados casos estas serían las que nos proporcionen las imagenes y
contenidos multimedia para su uso comercial. Y dado que supuestamente estaríamos autorizados por las marcas, también estaríamos autorizados para comprar productos directamente
de los fabricantes y mayoristas, y revenderlos sin ninguna restricción. 

### Como abrir
Es necesario tener instalado Visual Studio Code.
Una vez descargado o clonado el proyecto para poder editarlo o ejecutarlo es necesario ejecutar los siguientes comandos:
>npm install

>npm install bootstrap

### Estructura Básica del poyecto
src/
├── app/
│   ├── carrito/
│   ├── footer/
│   ├── header/
│   ├── inicio/
│   ├── login/
│   ├── product/
│   ├── productos/
│   ├── registro/
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.css.map
│   ├── app.component.html
│   ├── app.component.min.css
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
│   ├── images/
│   │   ├── pagos/
│   │   └── productos/

## Descripción de Carpetas y Archivos

### `app/`
Contiene los componentes y módulos principales de la aplicación:
- **`carrito/`**: Componente para gestionar el carrito de compras.
- **`footer/`**: Componente del pie de página.
- **`header/`**: Componente del encabezado.
- **`inicio/`**: Página principal o landing page.
- **`login/`**: Componente para el sistema de inicio de sesión.
- **`product/`**: Componente para la vista de un producto individual.
- **`productos/`**: Componente para la lista de productos.
- **`registro/`**: Componente para el sistema de registro de usuarios.
- **Archivos Base**:
  - `app-routing.module.ts`: Configuración de rutas de la aplicación.
  - `app.module.ts`: Módulo principal de la aplicación.
  - `app.component.*`: Archivos relacionados con el componente raíz.

### `assets/`
Contiene recursos estáticos como imágenes:
- **`images/`**: Directorio de imágenes generales.
  - **`pagos/`**: Imágenes relacionadas con métodos de pago.
  - **`productos/`**: Espacio reservado para imágenes de productos.
