import reflex as rx
import httpx

# URL de la PokeAPI para obtener los primeros 10 Pokémon
API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10"

# Función para obtener los datos de la API
async def obtener_datos_api():
    try:
        async with httpx.AsyncClient() as cliente:
            respuesta = await cliente.get(API_URL)
            print("Status Code:", respuesta.status_code)  # Verificar código HTTP
            print("Contenido de la respuesta:", respuesta.text)  # Imprimir respuesta cruda
            respuesta.raise_for_status()  # Verificar errores HTTP
            return respuesta.json()  # Retornar el JSON decodificado

    except httpx.HTTPStatusError as e:
        print(f"Error HTTP: {e.response.status_code}")
        raise e
    except Exception as e:
        print(f"Error al obtener los datos: {e}")
        raise e

# Estado para manejar los datos de la API
class EstadoDatosAPI(rx.State):
    datos: list[dict] = []  # Lista para almacenar los datos
    mensaje_notificacion: str = ""  # Mensaje de notificación

    # Método asíncrono para cargar los datos de la API
    async def cargar_datos(self):
        try:
            respuesta = await obtener_datos_api()  # Llamada a la API
            self.datos = respuesta["results"]  # Obtener la lista de Pokémon
            self.mensaje_notificacion = "Datos cargados correctamente"
        except httpx.HTTPStatusError as e:
            self.mensaje_notificacion = f"Error HTTP: {e.response.status_code}"
        except Exception as e:
            self.mensaje_notificacion = f"Error al cargar datos: {str(e)}"

# Componente para mostrar los datos de la API
def mostrar_datos_api():
    return rx.fragment(
        rx.button("Cargar Datos", on_click=EstadoDatosAPI.cargar_datos),  # Botón para cargar datos
        rx.box(
            rx.text(EstadoDatosAPI.mensaje_notificacion),  # Mostrar notificación
            visibility=rx.cond(EstadoDatosAPI.mensaje_notificacion, "visible", "hidden")  # Control de visibilidad
        ),
        rx.foreach(  # Iterar sobre los datos recibidos
            EstadoDatosAPI.datos,
            lambda dato: rx.box(rx.text(dato["name"]))  # Mostrar el nombre de cada Pokémon
        )
    )

# Página principal de la aplicación
def index():
    return rx.fragment(
        rx.heading("Datos de la PokeAPI"),  # Título
        mostrar_datos_api()  # Llamada al componente de datos
    )

# Crear la aplicación y añadir la página principal
app = rx.App()
app.add_page(index, route="/")  # Añadir la página principal
app._compile()  # Llamar al método _compile() para compilar
