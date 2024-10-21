import reflex as rx

# Estado para manejar la lógica del tablero Kanban
class KanbanState(rx.State):
    mostrar_solo_pendientes: bool = False  # Controlar el filtro de tareas
    tareas_filtradas: list[dict] = []  # Lista de tareas filtradas

    # Alternar entre mostrar todas o solo las pendientes
    def toggle_mostrar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes
        self.filtrar_tareas()  # Actualizar las tareas filtradas

    # Filtrar las tareas según el estado
    def filtrar_tareas(self):
        if self.mostrar_solo_pendientes:
            self.tareas_filtradas = [
                tarea for tarea in tareas if tarea["estado"] == "Pendiente"
            ]
        else:
            self.tareas_filtradas = tareas

# Componente para tarjeta de tarea con diseño mejorado
def tarjeta_tarea(tarea):
    # Asignar colores según el estado
    estado = tarea["estado"]
    color_borde = rx.cond(
        estado == "Pendiente", "#FF6B6B",  # Rojo claro
        rx.cond(
            estado == "En Progreso", "#4ECDC4",  # Azul celeste
            "#A3E635"  # Verde claro para Finalizada
        )
    )

    return rx.box(
        rx.text(f"Título: {tarea['titulo']}", 
                font_size="18px", font_weight="bold", 
                color="#2c3e50"),  # Texto en tono oscuro
        rx.text(f"Estado: {estado}", font_size="16px", color="gray"),
        rx.text(tarea["descripcion"], font_size="14px", color="#7f8c8d", margin_top="5px"),  # Contexto adicional

        background="white",
        box_shadow="0 4px 8px rgba(0, 0, 0, 0.1)",
        padding="15px",
        margin="10px",
        border_radius="8px",
        border_left=f"5px solid {color_borde}",  # Borde según estado
    )

# Componente de columna Kanban con diseño mejorado
def columna_kanban(nombre):
    return rx.box(
        rx.heading(nombre, size="lg", margin_bottom="10px", color="#333"),
        rx.vstack(
            rx.foreach(
                KanbanState.tareas_filtradas,
                lambda tarea: tarjeta_tarea(tarea),
            ),
            spacing="10px",
        ),
        background="#F7F9FC",
        padding="20px",
        border_radius="10px",
        box_shadow="0 4px 12px rgba(0, 0, 0, 0.1)",
        width="300px",
        margin="10px",
    )

# Datos de ejemplo con contexto adicional en cada tarea
tareas = [
    {"titulo": "Tarea 1", "estado": "Pendiente", "descripcion": "ACABAR CON REFLEX"},
    {"titulo": "Tarea 2", "estado": "En Progreso", "descripcion": "Estudiar el paper"},
    {"titulo": "Tarea 3", "estado": "Pendiente", "descripcion": "Acabar de ver Dragon ball"},
    {"titulo": "Tarea 4", "estado": "Finalizada", "descripcion": "Packet Tracer REDES"},
]

# Página principal con diseño atractivo
def index():
    return rx.center(
        rx.vstack(
            rx.button(
                "Mostrar/Ocultar Pendientes",
                on_click=KanbanState.toggle_mostrar_pendientes,
                background="#3498db",
                color="white",
                padding="12px 24px",
                border_radius="8px",
                box_shadow="0 4px 8px rgba(0, 0, 0, 0.2)",
                _hover={"background": "#2980b9"},
            ),
            rx.hstack(
                columna_kanban("En Progreso"),
            ),
            spacing="30px",
        ),
        padding="50px",
        background="#EAF0F6",
        height="100vh",  # Altura completa de la ventana
    )

# Crear la aplicación y añadir la página principal
app = rx.App()
app.add_page(index, route="/")
app._compile()  # Compilar la aplicación correctamente
