Muchas gracias por revisar mi codigo !!

## Login
app/(auth)/login/page.tsx

Utilizo dos formularios, uno para obtener el mail, y otro para el password.
Se validan ambos formularios con sus respectivos onSubmit.
Se emplea un estado "step" para el renderizado condicional entre ambos formularios.
Luego del segundo onSubmit, teniendo ambos datos, realizo la llamada a la API.

## Register
app/(auth)/register/page.tsx

Utilizo un solo formulario con su respectivo useFormContext.
Se crearon 2 componentes para su reutilizacion:
InputForm: para obtener cada dato ingresado.
SubmitForm: para el boton final del formulario.

## Handle Routes
( Arreglar tipos )

authApi.login => PasswordForm.tsx
----------------------------------
Creamos una clase "AuthApi" con un metodo "login". Donde llamamos a un servicio "httpPost" y realizamos el fetch, pasando en su body, los datos antes recolectados.
Evaluamos la respuesta y verificamos sus posibles errores.
Status 200, respuesta {token: "..."}
Status 401, respuesta {"error":"invalid credentials"}
Status 404, respuesta {error: "user not found"}
y por ultimo un 404 con fallo del servidor. Es por eso que tiene un try/catch en el servicio, 
y otro en la llamada en el onSubmit del formulario.
Todos estos errores, son recolectados en el estado "loginError" para mostrarlo en pantalla.


