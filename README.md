1. Index y JS:
   - Creé un boton para cambiar de tema, el cual llama a la función "cambiar modo oscuro", que ejecuta la clase dark-mode del CSS --> Recopilé información de la web para realizarlo
   - Creé un formulario, y para cada input puse un "p", que en caso de error, muestra el mismo
   - Cada input llama a una función. En caso de los de texto, usa el método "onkeyup", que hace que cada vez que se escribe un caracter en el input, se actualice (en vivo). El js recibe el valor exacto del input en el momento (this.value), y comprueba si cumple
     las condiciones (ValidarNombre, ValidarEmail, etc.). Si no cumple, devuelve un mensaje de error en rojo.
   - En el caso del botón submit, recopila todos los inputs del form mediante un getElementById, y chequea que todas las validaciones se cumplan. Si no lo hace, para el envío. Si lo hacen, envía el form y muestra mediante un alert un mensaje de bienvenida.
   - Los botones de mostrar/ocultar los saqué de internet.
3. CSS:
   - Le di estilo al body, y su forma "dark-mode". Usé un estilo que ya había utilizado el año pasado para un tp de login
   - .tema es el botón de cambiar colores. Lo envié a la parte superior de la pantalla, y le puse hover y focus.
   - Le dí estilo general al form, y además hice lo mismo con los campos de texto y submit. También me basé en un tp del año pasado.
   - .mostrar son los botones de mostrar/ocultar contraseña. Les di estilos básicos (no tuve mucho tiempo de hacerlo mejor).
   - Le dí estilo a los p, que son el mensaje de error.
   - Usé el @media para la responsibidad, también basandome en anteriores tps.
