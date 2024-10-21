import reflex as rx

class EstadoFormulario(rx.State):
    nombre: str = ""
    email: str = ""
    mensaje: str = ""
    mensaje_notificacion: str = ""

    def enviar_formulario(self):
        if "@" not in self.email:
            self.mensaje_notificacion = "Error: Dirección de correo electrónico no válida"
        else:
            self.mensaje_notificacion = "Formulario enviado correctamente :D ahora ten cuidado al caminar xd"

    def set_nombre(self, valor):
        self.nombre = valor

    def set_email(self, valor):
        self.email = valor

    def set_mensaje(self, valor):
        self.mensaje = valor

def formulario_contacto():
    return rx.fragment(
        rx.heading("Formulario de Contacto"),
        rx.form(
            rx.input(
                placeholder="Nombre Y Apellido",
                value=EstadoFormulario.nombre,
                on_change=lambda valor: EstadoFormulario.set_nombre(valor),
            ),
            rx.input(
                placeholder="Correo electrónico",
                value=EstadoFormulario.email,
                on_change=lambda valor: EstadoFormulario.set_email(valor),
            ),
            rx.text_area(
                placeholder="Mensaje CON CUIDADO A LA BOLSA 7-7",
                value=EstadoFormulario.mensaje,
                on_change=lambda valor: EstadoFormulario.set_mensaje(valor),
            ),
            rx.button("Enviar PERO CON CUIDADO", on_click=EstadoFormulario.enviar_formulario),
        ),
        rx.box(
            rx.text(EstadoFormulario.mensaje_notificacion),
            visibility=rx.cond(EstadoFormulario.mensaje_notificacion, "visible", "hidden")
        )
    )

def index():
    return rx.fragment(
        rx.heading("Bienvenido al formulario de quejas sobre quien hace sus tareas de dragon ball"),
        rx.text("CUIDADO APARECES EN BOLSA NEGRA LUEGO DE LLENARLO D:"),
        formulario_contacto()
    )

# Crear la aplicación y añadir las páginas
app = rx.App()
app.add_page(index, route="/")
app._compile()
