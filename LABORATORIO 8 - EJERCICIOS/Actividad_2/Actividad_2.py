import reflex as rx

class Task(rx.Base):
    text: str
    completed: bool = False

class State(rx.State):
    tasks: list[Task] = []
    new_task: str = ""

    def add_task(self):
        if self.new_task:
            self.tasks.append(Task(text=self.new_task))
            self.new_task = ""

    def delete_task(self, index: int):
        self.tasks.pop(index)

    def toggle_complete(self, index: int):
        self.tasks[index].completed = not self.tasks[index].completed

def task_item(task: Task, index: int):
    return rx.hstack(
        rx.text(
            task.text,
            text_decoration=rx.cond(
                task.completed,
                "line-through",
                "none"
            ),
        ),
        rx.spacer(),
        rx.checkbox(
            on_change=State.toggle_complete(index),
            is_checked=task.completed,
        ),
        rx.button(
            "Borrar",
            on_click=State.delete_task(index),
            size="sm",
            color_scheme="red",
        ),
        width="100%",
        border="1px solid #eaeaea",
        padding="2",
        border_radius="md",
    )

def index():
    return rx.vstack(
        rx.heading("Gestor de Tareas"),
        rx.hstack(
            rx.input(
                placeholder="Escribe una tarea",
                value=State.new_task,
                on_change=State.set_new_task,
            ),
            rx.button("Agregar Tarea", on_click=State.add_task),
        ),
        rx.text("Escribe una tarea y haz clic en 'Agregar Tarea'"),
        rx.cond(
            State.tasks,
            rx.vstack(
                rx.heading("Lista de Tareas", size="md"),
                rx.foreach(
                    State.tasks,
                    task_item
                ),
            ),
        ),
        width="100%",
        max_width="600px",
        spacing="4",
        padding="4",
    )

app = rx.App()
app.add_page(index)