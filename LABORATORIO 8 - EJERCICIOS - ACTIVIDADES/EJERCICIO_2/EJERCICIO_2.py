import reflex as rx

# Estado para manejar la lógica del tablero Kanban
class KanbanState(rx.State):
    mostrar_solo_pendientes: bool = False  
    tareas_filtradas: list[dict] = []

    def toggle_mostrar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes
        self.filtrar_tareas()  # Actualizar tareas filtradas

    def filtrar_tareas(self):
        if self.mostrar_solo_pendientes:
            self.tareas_filtradas = [
                tarea for tarea in todas_las_tareas if tarea["estado"] == "Pendiente"
            ]
        else:
            self.tareas_filtradas = todas_las_tareas

def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        contadores[estado] = contadores.get(estado, 0) + 1
    return contadores

def tarjeta_tarea(tarea):
    color_borde = rx.cond(
        tarea["estado"] == "Pendiente", "#FF6B6B", 
        rx.cond(tarea["estado"] == "En Progreso", "#4ECDC4", "#7AC74F")  
    )

    return rx.box(
        rx.text(f"Misiones: {tarea['titulo']}", 
                font_weight="bold", font_size="lg", color="#222", margin_bottom="5px"),
        rx.text(f"Estado: {tarea['estado']}", font_size="md", color="#555", margin_bottom="5px"),
        rx.text(f"Descripción: {tarea['descripcion']}", 
                font_size="sm", color="#333", margin_bottom="10px", line_height="1.5"),
        border_left=f"5px solid {color_borde}",
        padding="15px",
        margin="10px 0",
        border_radius="10px",
        box_shadow="lg",
        bg="white",
    )

# Componente de columna Kanban
def columna_kanban(nombre):
    return rx.box(
        rx.heading(nombre, size="lg", font_weight="bold", color="#333"),
        rx.foreach(  
            KanbanState.tareas_filtradas,
            lambda tarea: tarjeta_tarea(tarea),
        ),
        padding="20px",
        border="2px solid #CBD5E0",
        border_radius="10px",
        bg="white",
        width="350px",
        margin="20px auto",
    )

todas_las_tareas = [
    {"titulo": "Entrenar a Goku", "estado": "Pendiente", 
     "descripcion": "Aumentar su poder para enfrentarse a los Saiyajins."},
    {"titulo": "Recuperar las Esferas del Dragón", "estado": "En Progreso", 
     "descripcion": "Buscar las esferas en Namek para revivir a Krillin."},
    {"titulo": "Entrenar con Piccolo", "estado": "Pendiente", 
     "descripcion": "Aprender nuevas técnicas de combate."},
    {"titulo": "Finalizar la batalla con Freezer", "estado": "Finalizada", 
     "descripcion": "Usar el Kamehameha para derrotarlo de una vez."},
]

# Página principal
def index():
    contadores = contar_tareas_por_estado(todas_las_tareas)

    return rx.center(
        rx.vstack(
            rx.button(
                "Mostrar/Ocultar Misiones Pendientes",
                on_click=KanbanState.toggle_mostrar_pendientes,
                background="#1E90FF",  # Azul claro
                color="white",
                padding="10px",
                border_radius="5px",
                box_shadow="md",
                margin_bottom="20px",
                _hover={"background": "#104E8B"},  
            ),
            columna_kanban("Misiones en Progreso"),
            rx.box(
                rx.text(f"Pendientes: {contadores.get('Pendiente', 0)}", 
                        font_weight="bold", font_size="md", color="#FF6347"),  # Rojo tomate
                rx.text(f"En Progreso: {contadores.get('En Progreso', 0)}", 
                        font_weight="bold", font_size="md", color="#FFA500"),  # Naranja
                rx.text(f"Finalizadas: {contadores.get('Finalizada', 0)}", 
                        font_weight="bold", font_size="md", color="#32CD32"),  # Verde lima
                bg="#F0F8FF",  # Fondo 
                padding="15px",
                border_radius="8px",
                box_shadow="md",
                margin_top="20px",
            ),
            spacing="20px",
        ),
        padding="50px",
        bg="#EDF2F7",
        min_height="100vh",
    )


app = rx.App()
app.add_page(index, route="/")
app._compile() 