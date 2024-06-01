Muchas gracias por revisar mi codigo !!

## Login

Utilizo un estado general para guardar {email: "...", password: "..."} y utilizo un formulario para cada uno. Y con el onSubmit del 2do formulario, teniendo ambos datos, la llamada a la API.

## Register

Utilizo un solo formulario, con un solo onSubmit para luego de las validaciones, finalizar llamando a la API.
Se crearon 2 componentes:
InputForm para cada dato que necesitamos recolectar.
SubmitForm para el boton final del formulario.
Para esto se empló un Provider y su respectivo useFormContext.
